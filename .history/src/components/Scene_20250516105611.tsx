import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Knight() {
  const { scene } = useGLTF('/src/assets/models/strong_knight.glb')
  return <primitive object={scene} scale={1} position={[0, 0, 0]} />
}

export default function Scene() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Knight />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
} 