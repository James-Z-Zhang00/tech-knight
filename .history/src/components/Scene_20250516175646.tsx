import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import NavigationMenu from './NavigationMenu'
import Knight from './Knight'
import LoadingScreen from './LoadingScreen'
import ContentSection from './ContentSection'

export default function Scene() {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh',
      background: '#2c1810',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <NavigationMenu />

      {/* Content and Scene Container */}
      <div style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        padding: '0 2rem',
        minHeight: '90vh'
      }}>
        {/* Left side content */}
        <ContentSection />

        {/* 3D Scene Container - Right side */}
        <div style={{ 
          width: '50%',
          height: '90vh',
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
            />
          </Canvas>
        </div>
      </div>
    </div>
  )
} 