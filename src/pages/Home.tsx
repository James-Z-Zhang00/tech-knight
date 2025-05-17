import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import Knight from '../components/home/Knight'
import LoadingScreen from '../components/home/LoadingScreen'
import ContentSection from '../components/home/ContentSection'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section style={{ 
      width: '100%', 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Content and Scene Container */}
      <div style={{
        display: 'flex',
        flex: 1,
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        padding: isMobile ? '1rem' : '0 2rem',
        minHeight: isMobile ? 'auto' : '90vh'
      }}>
        {/* Left side content */}
        <ContentSection />

        {/* 3D Scene Container */}
        <div style={{ 
          width: isMobile ? '100%' : '50%',
          height: isMobile ? '50vh' : '90vh',
          position: 'relative'
        }}>
          <LoadingScreen />
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
              enablePan={!isMobile}
              enableZoom={!isMobile}
            />
          </Canvas>
        </div>
      </div>
    </section>
  )
} 