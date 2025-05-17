import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Preload the model
useGLTF.preload('/models/bastard_sword.glb');

const ExperienceSword: React.FC = () => {
  const { scene } = useGLTF('/models/bastard_sword.glb', true);
  
  useEffect(() => {
    scene.traverse((child: THREE.Object3D) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.geometry instanceof THREE.BufferGeometry) {
          child.geometry.computeVertexNormals();
        }
        // Add metallic material properties
        if (child.material) {
          child.material.metalness = 0.8;
          child.material.roughness = 0.2;
        }
      }
    });
  }, [scene]);

  return (
    <primitive 
      object={scene} 
      scale={3} 
      position={[0, 1, 0]} 
      rotation={[1, Math.PI * 1.5, -1]} 
    />
  );
};

export default ExperienceSword; 