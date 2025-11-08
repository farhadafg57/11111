'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

function ProjectCore() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color="#00FFFF"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
        emissive="#00FFFF"
        emissiveIntensity={0.5}
      />
    </Sphere>
  );
}

export default function CanvasPage() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <ProjectCore />
      <OrbitControls />
    </Canvas>
  )
}
