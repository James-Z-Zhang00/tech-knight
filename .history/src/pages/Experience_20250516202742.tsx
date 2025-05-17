import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, SpotLight, Environment } from '@react-three/drei';
import ExperienceSword from '../components/ui/ExperienceSword';

const Experience: React.FC = () => {
  return (
    <div id="experience" style={{ position: 'relative', height: '100%' }}>
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 2, 5]} />
          <OrbitControls 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            minDistance={3}
            maxDistance={7}
          />
          
          <Environment preset="sunset" />
          
          <SpotLight
            position={[5, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <SpotLight
            position={[-5, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
            castShadow
          />
          
          <ExperienceSword />
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