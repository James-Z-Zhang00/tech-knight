import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Knight() {
  const { scene } = useGLTF('/src/assets/models/strong_knight.glb')
  return <primitive object={scene} scale={0.5} position={[0, 0, 0]} />
}

export default function Scene() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Knight />
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