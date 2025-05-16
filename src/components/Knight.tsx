import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'

// Preload the model
useGLTF.preload('/models/forgotten_knight.glb')

const Knight: React.FC = () => {
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

  return <primitive object={scene} scale={1.25} position={[0, 0, 0]} rotation={[0, -(Math.PI * 35/180), 0]} />
}

export default Knight 