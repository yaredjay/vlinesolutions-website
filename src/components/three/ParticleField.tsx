"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles({ count = 2400, accent }: { count?: number; accent: THREE.Color }) {
  const ref = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const base = new THREE.Color("#ffffff");
    for (let i = 0; i < count; i++) {
      // shell around center: a curved disc
      const r = 2.6 + Math.pow(Math.random(), 1.6) * 3.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.95;
      const x = Math.cos(theta) * r;
      const y = Math.sin(phi) * r * 0.55;
      const z = Math.sin(theta) * r;
      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      const t = Math.random();
      const c = base.clone().lerp(accent, t * 0.9);
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      sizes[i] = 0.014 + Math.random() * 0.028;
    }
    return { positions, colors, sizes };
  }, [count, accent]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mouse.current.x += ((state.pointer.x ?? 0) - mouse.current.x) * 0.04;
    mouse.current.y += ((state.pointer.y ?? 0) - mouse.current.y) * 0.04;
    if (ref.current) {
      ref.current.rotation.y = t * 0.06 + mouse.current.x * 0.55;
      ref.current.rotation.x = -0.18 + mouse.current.y * 0.35;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function GlowSphere({ accent }: { accent: THREE.Color }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.12;
      ref.current.rotation.x = Math.sin(t * 0.2) * 0.15;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.05, 1]} />
      <meshBasicMaterial color={accent} wireframe transparent opacity={0.28} />
    </mesh>
  );
}

export default function ParticleField() {
  const accent = useMemo(() => new THREE.Color("#00d4ff"), []);
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 7.5], fov: 55 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <GlowSphere accent={accent} />
      <Particles count={2200} accent={accent} />
    </Canvas>
  );
}
