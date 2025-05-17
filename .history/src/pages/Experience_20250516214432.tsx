import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ExperienceSword from '../components/ui/ExperienceSword';
import LoadingScreen from '../components/home/LoadingScreen';

const Experience: React.FC = () => {
  return (
    <div id="experience" style={{ 
      position: 'relative', 
      minHeight: '100vh',
      background: '#2c1810',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '2rem'
    }}>
      {/* 3D Canvas Section */}
      <div style={{ 
        width: '100%',
        height: '30vh',
        position: 'relative',
        marginTop: '2rem'
      }}>
        <LoadingScreen />
        <Canvas shadows camera={{ position: [0, 2, 2], fov: 50 }}>
          <Environment preset="sunset" />
          
          <Suspense fallback={null}>
            <group position={[0, -1, 0]}>
              <ExperienceSword />
            </group>
          </Suspense>
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            target={[0, 0, 0]}
          />
        </Canvas>
      </div>

      {/* Sword Note Section */}
      <div style={{
        padding: '1rem',
        textAlign: 'center',
        background: 'rgba(44, 24, 16, 0.7)',
        borderTop: '1px solid rgba(230, 200, 142, 0.2)',
        borderBottom: '1px solid rgba(230, 200, 142, 0.2)',
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '1rem',
          background: 'rgba(44, 24, 16, 0.5)',
          border: '1px solid rgba(230, 200, 142, 0.3)',
          borderRadius: '4px'
        }}>
          <h4 style={{
            color: '#f0d4a0',
            fontSize: '1.2rem',
            fontFamily: "'Goethe', 'Times New Roman', serif",
            marginBottom: '0.5rem',
            letterSpacing: '0.05em'
          }}>
            The Bastard Sword
          </h4>
          <p style={{
            color: '#e6c88e',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic'
          }}>
            Also known as the Hand-and-a-Half Sword, this versatile weapon represents adaptability 
            and mastery. Like a developer's diverse skill set, it bridges the gap between 
            agile single-handed techniques and powerful two-handed approaches.
          </p>
        </div>
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