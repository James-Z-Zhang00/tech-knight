import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import knightModel from '../assets/models/strong_knight.glb'

function Knight() {
  const { scene } = useGLTF(knightModel)
  return <primitive object={scene} scale={0.5} position={[0, 0, 0]} />
}

export default function Scene() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <color attach="background" args={['#f0f0f0']} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, -5]} intensity={0.5} />
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