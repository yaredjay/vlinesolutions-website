"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * A single full-bleed plane running a flowing-aurora fragment shader.
 * One draw call, no geometry, capped device pixel ratio: cheap enough for phones.
 * uScroll (0 → 1 over the hero's travel) pushes the light upward and cools it,
 * so the sky responds to the thumb.
 */

const vert = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const frag = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uRes;

  // --- hash / value noise / fbm (cheap, 3 octaves)
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
  float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0; float a = 0.5;
    mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    for (int i = 0; i < 3; i++) { v += a * noise(p); p = m * p; a *= 0.5; }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uRes.x / max(uRes.y, 1.0);
    vec2 p = vec2(uv.x * aspect, uv.y);
    float t = uTime * 0.06;
    float lift = uScroll * 0.35;

    // domain warp
    vec2 q = vec2(fbm(p * 1.4 + vec2(0.0, t)), fbm(p * 1.4 + vec2(5.2, -t * 0.8)));
    vec2 r = vec2(fbm(p * 1.1 + 2.0 * q + vec2(1.7, 9.2) + t * 0.5),
                  fbm(p * 1.1 + 2.0 * q + vec2(8.3, 2.8) - t * 0.4));
    float f = fbm(p * 1.3 + 2.4 * r - vec2(0.0, lift));

    // palette: electric, sky, lime, flame, violet on white
    vec3 electric = vec3(0.169, 0.361, 1.0);
    vec3 sky      = vec3(0.0,   0.761, 1.0);
    vec3 lime     = vec3(0.784, 1.0,   0.102);
    vec3 flame    = vec3(1.0,   0.478, 0.271);
    vec3 violet   = vec3(0.486, 0.302, 1.0);

    vec3 col = mix(electric, sky, smoothstep(0.25, 0.6, f));
    col = mix(col, lime, smoothstep(0.55, 0.85, r.x) * 0.9);
    col = mix(col, flame, smoothstep(0.6, 0.95, q.y) * 0.7);
    col = mix(col, violet, smoothstep(0.1, 0.35, f) * (1.0 - uv.y) * 0.6);

    // intensity: ribbons live mid-right and top, fade toward the left where the headline sits
    float band = smoothstep(0.15, 0.75, f) * (1.0 - smoothstep(0.75, 1.0, f));
    float mask = smoothstep(0.08, 0.55, uv.x + (1.0 - uv.y) * 0.25);
    float top = smoothstep(0.0, 0.25, uv.y);
    float a = band * mask * top * (0.75 - uScroll * 0.35);

    // soft vignette so edges melt into the white page
    float vig = smoothstep(0.0, 0.12, uv.y) * smoothstep(1.0, 0.88, uv.y) * smoothstep(1.0, 0.9, uv.x);
    a *= vig;

    gl_FragColor = vec4(col, a);
  }
`;

function AuroraPlane({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );
  useEffect(() => {
    uniforms.uRes.value.set(size.width, size.height);
  }, [size, uniforms]);
  useFrame((state) => {
    if (!mat.current) return;
    mat.current.uniforms.uTime.value = state.clock.getElapsedTime();
    // ease toward the latest scroll value so fast flicks stay silky
    const u = mat.current.uniforms.uScroll;
    u.value += (scrollRef.current - u.value) * 0.08;
  });
  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial ref={mat} vertexShader={vert} fragmentShader={frag} uniforms={uniforms} transparent depthWrite={false} depthTest={false} />
    </mesh>
  );
}

export default function AuroraScene({
  scrollRef,
  active,
}: {
  scrollRef: React.MutableRefObject<number>;
  active: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance", premultipliedAlpha: false }}
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      style={{ position: "absolute", inset: 0, background: "transparent" }}
    >
      <AuroraPlane scrollRef={scrollRef} />
    </Canvas>
  );
}
