import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, SpotLight, Environment, AmbientLight } from '@react-three/drei';
import ExperienceSword from '../components/ui/ExperienceSword';

const Experience: React.FC = () => {
  return (
    <div id="experience" style={{ position: 'relative', height: '100vh' }}>
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        background: '#2c1810'
      }}>
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
          <color attach="background" args={['#2c1810']} />
          <fog attach="fog" args={['#2c1810', 5, 15]} />
          
          <AmbientLight intensity={0.5} />
          <SpotLight
            position={[5, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />
          <SpotLight
            position={[-5, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
          
          <Environment preset="sunset" />
          
          <group position={[0, -1, 0]}>
            <ExperienceSword />
          </group>
          
          <OrbitControls 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            minDistance={3}
            maxDistance={7}
          />
        </Canvas>
      </div>
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '2rem',
        color: '#e6c88e',
        fontSize: '1.1rem',
        lineHeight: '1.8',
        textAlign: 'justify',
        fontFamily: 'Georgia, serif',
        background: 'rgba(44, 24, 16, 0.8)',
        backdropFilter: 'blur(5px)',
        borderRadius: '8px',
        margin: '2rem'
      }}>
        <h3 style={{ 
          color: '#f0d4a0',
          marginBottom: '1rem',
          fontSize: '1.5rem'
        }}>
          Professional Journey
        </h3>
        Content coming soon...
      </div>
    </div>
  );
};

export default Experience; 