'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Html } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import type { Mesh } from 'three'
import { agents } from '@/lib/agents'
import type { LucideIcon } from 'lucide-react'

// A simple hash function to get a deterministic but unique-looking value
const simpleHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
};

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

function AgentSatellite({ agent, index, total }: { agent: { name: string, Icon: LucideIcon, slug: string }, index: number, total: number }) {
  const meshRef = useRef<Mesh>(null!)
  const orbitRadius = 8;
  const angle = (index / total) * Math.PI * 2;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const x = orbitRadius * Math.cos(angle + time * 0.1);
    const z = orbitRadius * Math.sin(angle + time * 0.1);
    const y = 2 * Math.sin(angle + time * 0.3);
    if (meshRef.current) {
        meshRef.current.position.set(x, y, z);
    }
  });

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]}>
        <MeshDistortMaterial
            color="#00FFFF"
            attach="material"
            distort={0.2}
            speed={2}
            roughness={0.5}
            metalness={0.5}
            emissive="#00FFFF"
            emissiveIntensity={0.1}
        />
        <Html distanceFactor={15} position={[0, 1, 0]}>
            <div className="text-cyan-400/50 flex items-center gap-2 w-max pointer-events-none">
               <agent.Icon style={{ width: '24px', height: '24px', filter: 'drop-shadow(0 0 5px #00FFFF)' }} />
            </div>
        </Html>
    </Sphere>
  )
}

export default function CanvasPage() {
  const orbitingAgents = useMemo(() => {
    return agents
      .sort((a, b) => simpleHash(a.slug) - simpleHash(b.slug))
      .slice(0, 12);
  }, []);

  return (
    <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00FFFF" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#FFFFFF" />
      
      <ProjectCore />

      {orbitingAgents.map((agent, i) => (
        <AgentSatellite key={agent.slug} agent={agent} index={i} total={orbitingAgents.length} />
      ))}
      
      <OrbitControls 
        enablePan={true} 
        enableZoom={true} 
        minDistance={5} 
        maxDistance={50} 
        autoRotate={true}
        autoRotateSpeed={0.1}
      />
    </Canvas>
  )
}
