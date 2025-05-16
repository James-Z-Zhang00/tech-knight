import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, useProgress } from '@react-three/drei'
import { Suspense, useEffect } from 'react'
import * as THREE from 'three'

function LoadingScreen() {
  const { progress, active } = useProgress()
  
  return active ? (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#2c1810',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        width: '200px',
        height: '4px',
        background: '#4a3828',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#e6c88e',
          transition: 'width 0.3s ease',
        }} />
      </div>
      <div style={{
        color: '#e6c88e',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
      }}>
        Loading... {progress.toFixed(0)}%
      </div>
    </div>
  ) : null
}

// Preload the model
useGLTF.preload('/models/forgotten_knight.glb')

function Knight() {
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

export default function Scene() {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh',
      background: '#2c1810',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Space for text content */}
      <div style={{
        padding: '2rem',
        color: '#e6c88e',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          The Forgotten Knight
        </h1>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto',
          opacity: '0.9'
        }}>
          A Tale of Honor and Valor in the Medieval Realm
        </p>
      </div>

      {/* Content and Scene Container */}
      <div style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        padding: '0 2rem',
        minHeight: '90vh'
      }}>
        {/* Left side content */}
        <div style={{
          flex: 1,
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          height: '90vh',
        }}>
          <article style={{
            maxWidth: '600px',
            margin: '0 auto',
            background: 'rgba(44, 24, 16, 0.7)',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              marginBottom: '2rem',
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <h2 style={{
                color: '#e6c88e',
                fontSize: '2.2rem',
                fontFamily: "'Goethe', serif",
                margin: 0,
                opacity: 0.9,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontWeight: 'normal'
              }}>
                Introduction
              </h2>
              <h2 style={{
                color: '#e6c88e',
                fontSize: '2.0rem',
                fontFamily: 'Georgia, serif',
                fontWeight: 'normal',
                margin: 0,
                opacity: 0.9,
                letterSpacing: '0.05em'
              }}>
                Introduction
              </h2>
            </div>
            <p style={{
              color: '#e6c88e',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              textAlign: 'justify',
              fontFamily: 'Georgia, serif',
              paddingLeft: '2rem',
            }}>
              In the depths of time, where legends whisper through ancient stones, stands a knight of extraordinary valor. This forgotten warrior, clad in armor that bears the marks of countless battles, embodies the timeless virtues of chivalry. Though his name may have faded from the scrolls of history, his spirit endures as a testament to the enduring power of honor, courage, and unwavering dedication to noble causes.
            </p>
          </article>
        </div>

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