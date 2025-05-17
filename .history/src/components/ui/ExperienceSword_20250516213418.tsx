import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Preload the model
useGLTF.preload('/models/bastard_sword.glb');

const ExperienceSword: React.FC = () => {
  const { scene } = useGLTF('/models/bastard_sword.glb', true, undefined, (error) => {
    console.error('Error loading sword model:', error);
  });
  
  const swordRef = useRef<THREE.Group>(null);

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

  useFrame((state) => {
    if (!swordRef.current) return;
    
    // Vertical rotation animation
    const rotationSpeed = 0.5;
    const rotationAmplitude = 0.3;
    const verticalRotation = Math.sin(state.clock.elapsedTime * rotationSpeed) * rotationAmplitude;
    
    // Apply the rotation while maintaining the base rotation
    swordRef.current.rotation.x = 1.2 + verticalRotation;
  });

  return (
    <primitive 
      ref={swordRef}
      object={scene} 
      scale={5} 
      position={[-2, 1, 0]} 
      rotation={[1.2, Math.PI * 1.5, 0]} 
    />
  );
};

export default ExperienceSword; 