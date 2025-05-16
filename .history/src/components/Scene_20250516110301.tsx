import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { Suspense } from 'react'

function Knight() {
  const { scene } = useGLTF('/models/strong_knight.glb')
  return (
    <primitive 
      object={scene} 
      scale={0.5} 
      position={[0, 0, 0]}
      castShadow
      receiveShadow
    />
  )
}

export default function Scene() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas 
        camera={{ position: [0, 2, 8], fov: 45 }}
        shadows
      >
        <color attach="background" args={['#f0f0f0']} />
        <fog attach="fog" args={['#f0f0f0', 8, 20]} />
        
        {/* Main lighting */}
        <ambientLight intensity={1} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.5} 
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, 5, -5]} intensity={0.5} />
        
        {/* Ground shadow */}
        <AccumulativeShadows
          temporal
          frames={100}
          alphaTest={0.85}
          opacity={0.8}
          scale={10}
          position={[0, 0, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={5}
            intensity={0.5}
            ambient={0.5}
            position={[5, 5, -5]}
          />
        </AccumulativeShadows>

        <Suspense fallback={null}>
          <Knight />
          <Environment preset="studio" />
        </Suspense>
        
        <OrbitControls 
          minDistance={5}
          maxDistance={15}
          target={[0, 1, 0]}
        />
      </Canvas>
    </div>
  )
} 