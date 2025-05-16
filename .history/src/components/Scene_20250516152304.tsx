import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Loader } from '@react-three/drei'
import { Suspense, useEffect } from 'react'
import * as THREE from 'three'

// Preload the model
useGLTF.preload('/models/forgotten_knight.glb')

function Knight() {
  const { scene } = useGLTF('/models/forgotten_knight.glb', true)
  
  useEffect(() => {
    scene.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
        child.receiveShadow = true
        if (child.geometry instanceof THREE.BufferGeometry) {
          child.geometry.dispose()
          child.geometry = child.geometry.clone()
          child.geometry.computeVertexNormals()
        }
      }
    })
  }, [scene])

  return <primitive object={scene} scale={1.1} position={[0, 0, 0]} />
}

export default function Scene() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#2c1810' }}>
      <Canvas 
        camera={{ position: [0, 4, 10], fov: 45 }}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <color attach="background" args={['#2c1810']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#e6c88e" />
        <pointLight position={[-5, 5, -5]} intensity={0.6} color="#8b4513" />
        <Suspense fallback={null}>
          <Knight />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls 
          minDistance={5}
          maxDistance={15}
          target={[0, 1, 0]}
        />
      </Canvas>
      <Loader />
    </div>
  )
} 