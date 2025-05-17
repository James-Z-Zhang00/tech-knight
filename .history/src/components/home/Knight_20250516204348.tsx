import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Preload the model
useGLTF.preload('/models/forgotten_knight.glb')

const Knight: React.FC = () => {
  const { scene } = useGLTF('/models/forgotten_knight.glb', true)
  const knightRef = useRef<THREE.Group>(null)
  
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

  useFrame((state) => {
    if (!knightRef.current) return
    
    // Floating animation
    const floatOffset = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    knightRef.current.position.y = floatOffset
    
    // Subtle rotation
    const rotationOffset = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    knightRef.current.rotation.y = -(Math.PI * 35/180) + rotationOffset
  })

  return (
    <primitive 
      ref={knightRef}
      object={scene} 
      scale={1.25} 
      position={[0, 0, 0]} 
      rotation={[0, -(Math.PI * 35/180), 0]} 
    />
  )
}

export default Knight 