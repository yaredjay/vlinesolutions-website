"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Hero object: a procedural point-cloud globe with a graticule, a star
 * field, and a hub-and-spoke network of arcs from Campbell, California to
 * the places V-Line works. Scroll scrubs the rotation and dolly; the
 * pointer adds a few degrees of parallax. No textures, no assets.
 */

const HUB: [number, number] = [37.29, -121.95]; // Campbell, CA
const SPOKES: [number, number][] = [
  [38.9, -77.04], // Washington, DC
  [38.58, -121.49], // Sacramento, CA
  [38.98, -76.49], // Annapolis, MD
  [37.69, -97.27], // Wichita, KS (McConnell AFB)
  [21.31, -157.86], // Honolulu, HI
  [9.03, 38.74], // Addis Ababa
  [-1.29, 36.82], // Nairobi
  [51.5, -0.12], // London
];

const R = 3.1;

function toVec(lat: number, lon: number, rad = R) {
  const ph = ((90 - lat) * Math.PI) / 180;
  const th = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(-rad * Math.sin(ph) * Math.cos(th), rad * Math.cos(ph), rad * Math.sin(ph) * Math.sin(th));
}

function useCssColor(variable: string, fallback: string) {
  const [color, setColor] = useState(() => new THREE.Color(fallback));
  useEffect(() => {
    const read = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
      if (v) setColor(new THREE.Color(v));
    };
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, [variable]);
  return color;
}

function Stars({ count, accent, fg }: { count: number; accent: THREE.Color; fg: THREE.Color }) {
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const white = fg.clone();
    for (let i = 0; i < count; i++) {
      const r = 14 + Math.random() * 10;
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(2 * Math.random() - 1);
      positions.set([r * Math.sin(v) * Math.cos(u), r * Math.sin(v) * Math.sin(u) * 0.6, r * Math.cos(v)], i * 3);
      const c = white.clone().lerp(accent, Math.random() * 0.5);
      colors.set([c.r, c.g, c.b], i * 3);
    }
    return { positions, colors };
  }, [count, accent, fg]);
  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.004;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} sizeAttenuation vertexColors transparent opacity={0.6} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

function Scene({ count, accent, bg, fg, scroll }: { count: number; accent: THREE.Color; bg: THREE.Color; fg: THREE.Color; scroll: React.MutableRefObject<number> }) {
  const outer = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  const travelers = useRef<THREE.Mesh[]>([]);
  const rings = useRef<THREE.Mesh[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const { camera } = useThree();

  // Point cloud with soft "continent-like" brightness variation
  const cloud = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const bright = fg.clone().lerp(accent, 0.45);
    const dim = fg.clone().lerp(bg, 0.45);
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = i * 2.399963;
      const x = Math.cos(th) * r;
      const z = Math.sin(th) * r;
      pos.set([x * R, y * R, z * R], i * 3);
      const n = Math.abs(Math.sin(x * 5.3 + y * 7.1) * Math.cos(z * 6.7 - y * 3.3));
      const c = n > 0.62 ? bright : dim;
      col.set([c.r, c.g, c.b], i * 3);
    }
    return { pos, col };
  }, [count, accent, fg, bg]);

  // Graticule
  const graticule = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    const circle = (fn: (t: number) => THREE.Vector3) => {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= 96; i++) pts.push(fn((i / 96) * Math.PI * 2));
      lines.push(pts);
    };
    for (let lat = -60; lat <= 60; lat += 30) {
      const p = (lat * Math.PI) / 180;
      const rr = Math.cos(p) * R * 1.002;
      const yy = Math.sin(p) * R * 1.002;
      circle((t) => new THREE.Vector3(Math.cos(t) * rr, yy, Math.sin(t) * rr));
    }
    for (let lon = 0; lon < 180; lon += 30) {
      const l = (lon * Math.PI) / 180;
      circle((t) => new THREE.Vector3(Math.cos(t) * Math.cos(l) * R * 1.002, Math.sin(t) * R * 1.002, Math.cos(t) * Math.sin(l) * R * 1.002));
    }
    const mat = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.08 });
    return lines.map((pts) => new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), mat));
  }, [accent]);

  // Arcs
  const network = useMemo(() => {
    const hub = toVec(HUB[0], HUB[1]);
    const steps = 96;
    const arcs = SPOKES.map(([lat, lon]) => {
      const b = toVec(lat, lon);
      const pts: THREE.Vector3[] = [];
      const dist = hub.angleTo(b) / Math.PI; // 0..1
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const v = new THREE.Vector3().copy(hub).lerp(b, t).normalize();
        const lift = 1 + Math.sin(t * Math.PI) * (0.04 + dist * 0.16);
        pts.push(v.multiplyScalar(R * lift));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.75 }));
      return { pts, geo, line, end: b, steps };
    });
    // Orientation: face the hub-weighted centroid of the network toward the camera
    const mid = new THREE.Vector3().copy(hub).multiplyScalar(3);
    SPOKES.forEach(([lat, lon]) => mid.add(toVec(lat, lon)));
    mid.normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(mid, new THREE.Vector3(0.05, 0.25, 1).normalize());
    return { hub, arcs, q };
  }, [accent]);

  useEffect(() => {
    if (inner.current) inner.current.quaternion.copy(network.q);
    network.arcs.forEach((a) => a.geo.setDrawRange(0, 0));
  }, [network]);

  const drawn = useRef(0);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mouse.current.x += ((state.pointer.x ?? 0) - mouse.current.x) * 0.04;
    mouse.current.y += ((state.pointer.y ?? 0) - mouse.current.y) * 0.04;
    const s = scroll.current;
    if (outer.current) {
      outer.current.rotation.y = Math.sin(t * 0.1) * 0.22 + s * 0.9 + mouse.current.x * 0.18;
      outer.current.rotation.x = mouse.current.y * -0.1 - s * 0.12;
    }
    // Dolly out slightly as the hero scrolls away
    camera.position.z = 10.6 + s * 1.8;
    camera.position.y = -0.2 - s * 0.7;
    camera.lookAt(0, -1.3, 0);

    // Progressive arc draw, then travelers loop
    if (drawn.current < 97) {
      drawn.current += 0.9;
      network.arcs.forEach((a, i) => a.geo.setDrawRange(0, Math.max(0, Math.floor(drawn.current - i * 6))));
    }
    travelers.current.forEach((m, i) => {
      const a = network.arcs[i];
      if (!m || !a) return;
      const k = (t * 0.14 + i * 0.13) % 1;
      const idx = Math.max(0, Math.min(a.steps, Math.floor(k * a.steps)));
      m.position.copy(a.pts[idx]);
      (m.material as THREE.MeshBasicMaterial).opacity = Math.sin(k * Math.PI);
    });
    rings.current.forEach((r, i) => {
      if (!r) return;
      const p = 1 + Math.sin(t * 2 + i) * 0.18;
      r.scale.setScalar(p);
    });
  });

  return (
    <>
      <Stars count={Math.round(count / 6)} accent={accent} fg={fg} />
      <group ref={outer} position={[0, -2.5, 0]}>
        <group ref={inner}>
          {/* occluder so only the facing hemisphere reads */}
          <mesh>
            <sphereGeometry args={[R * 0.985, 48, 48]} />
            <meshBasicMaterial color={bg} />
          </mesh>
          <points>
            <bufferGeometry>
              <bufferAttribute attach="attributes-position" args={[cloud.pos, 3]} />
              <bufferAttribute attach="attributes-color" args={[cloud.col, 3]} />
            </bufferGeometry>
            <pointsMaterial size={0.03} sizeAttenuation vertexColors transparent opacity={0.8} depthWrite={false} />
          </points>
          {graticule.map((g, i) => (
            <primitive key={`g-${i}`} object={g} />
          ))}
          {network.arcs.map((a, i) => (
            <primitive key={`arc-${i}`} object={a.line} />
          ))}
          {/* hub */}
          <mesh position={network.hub.clone().multiplyScalar(1.01)}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshBasicMaterial color={accent} />
          </mesh>
          <mesh ref={(el) => { if (el) rings.current[0] = el; }} position={network.hub.clone().multiplyScalar(1.015)} onUpdate={(m) => m.lookAt(network.hub.clone().multiplyScalar(3))}>
            <ringGeometry args={[0.1, 0.125, 48]} />
            <meshBasicMaterial color={accent} transparent opacity={0.6} side={THREE.DoubleSide} />
          </mesh>
          {/* spoke endpoints and travelers */}
          {network.arcs.map((a, i) => (
            <group key={`end-${i}`}>
              <mesh position={a.end.clone().multiplyScalar(1.01)}>
                <sphereGeometry args={[0.035, 12, 12]} />
                <meshBasicMaterial color={accent} />
              </mesh>
              <mesh ref={(el) => { if (el) travelers.current[i] = el; }}>
                <sphereGeometry args={[0.03, 10, 10]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0} />
              </mesh>
            </group>
          ))}
        </group>
      </group>
    </>
  );
}

export default function Globe({ heroSelector = ".hero-root" }: { heroSelector?: string }) {
  const accent = useCssColor("--accent", "#00d4ff");
  const bg = useCssColor("--bg-base", "#050608");
  const fg = useCssColor("--fg-muted", "#7c8392");
  const scroll = useRef(0);
  const [count, setCount] = useState(6000);

  useEffect(() => {
    setCount(window.innerWidth < 768 ? 3200 : 6000);
    const hero = document.querySelector(heroSelector) as HTMLElement | null;
    const onScroll = () => {
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      scroll.current = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroSelector]);

  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, -0.2, 10.6], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Scene count={count} accent={accent} bg={bg} fg={fg} scroll={scroll} />
    </Canvas>
  );
}
