import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, SpotLight, Environment } from '@react-three/drei';
import ExperienceSword from '../components/ui/ExperienceSword';

const Experience: React.FC = () => {
  return (
    <div id="experience" style={{ 
      position: 'relative', 
      minHeight: '100vh',
      background: '#2c1810',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* 3D Canvas Section */}
      <div style={{ 
        width: '100%',
        height: '60vh',
        position: 'relative'
      }}>
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
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

      {/* Content Section */}
      <div style={{
        padding: '4rem 2rem',
        color: '#e6c88e',
        background: '#2c1810'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            fontFamily: "'Goethe', 'Times New Roman', serif",
            color: '#f0d4a0',
            textAlign: 'center'
          }}>
            Professional Journey
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '2rem'
          }}>
            <div style={{
              background: 'rgba(44, 24, 16, 0.5)',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid rgba(230, 200, 142, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '1rem',
                color: '#f0d4a0',
                fontFamily: 'Georgia, serif'
              }}>
                Technical Expertise
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                fontFamily: 'Georgia, serif'
              }}>
                With a foundation built on years of dedicated practice and continuous learning, 
                I've honed my skills in crafting elegant solutions to complex problems. 
                Like a master swordsmith perfecting their blade, I've refined my expertise 
                in modern web technologies and development practices.
              </p>
            </div>

            <div style={{
              background: 'rgba(44, 24, 16, 0.5)',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid rgba(230, 200, 142, 0.2)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '1rem',
                color: '#f0d4a0',
                fontFamily: 'Georgia, serif'
              }}>
                Battle-Tested Projects
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                fontFamily: 'Georgia, serif'
              }}>
                Each project represents a unique challenge conquered, a battle won through 
                strategic thinking and technical prowess. From scalable web applications 
                to innovative user interfaces, every solution is crafted with precision 
                and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 