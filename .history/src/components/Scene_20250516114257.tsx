import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import { Suspense, useEffect } from 'react'

// Preload the model
useGLTF.preload('/src/assets/models/forgotten_knight.glb')

function Knight() {
  const { scene, nodes, materials } = useGLTF('/src/assets/models/forgotten_knight.glb')
  console.log('Model loaded:', { scene, nodes, materials }) // Debug log
  
  useEffect(() => {
    // Log if the model is loaded
    console.log('Knight component mounted')
  }, [])

  return <primitive object={scene} scale={1.2} position={[0, 0, 0]} />
}

export default function Scene() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#2c1810' }}>
      <Canvas camera={{ position: [0, 4, 10], fov: 45 }}>
        <color attach="background" args={['#2c1810']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#e6c88e" />
        <pointLight position={[-5, 5, -5]} intensity={0.6} color="#8b4513" />
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="hotpink" /></mesh>}>
          <Knight />
          <Environment preset="sunset" />
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