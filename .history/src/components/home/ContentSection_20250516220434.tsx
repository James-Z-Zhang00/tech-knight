import React, { useState, useEffect } from 'react'

const ContentSection: React.FC = () => {
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
    <div style={{
      flex: isMobile ? 'none' : 1,
      padding: isMobile ? '1rem' : '2rem',
      display: 'flex',
      alignItems: 'center',
      height: isMobile ? 'auto' : '90vh',
      width: isMobile ? '100%' : 'auto'
    }}>
      <article style={{
        maxWidth: isMobile ? 'none' : '600px',
        width: isMobile ? '100%' : 'auto',
        margin: '0 auto',
        background: 'rgba(44, 24, 16, 0.7)',
        padding: isMobile ? '1.5rem' : '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          marginBottom: isMobile ? '1.5rem' : '2rem',
          position: 'relative',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: isMobile ? 'wrap' : 'nowrap'
        }}>
          <h2 style={{
            color: '#e6c88e',
            fontSize: isMobile ? '1.8rem' : '2.2rem',
            fontFamily: "'Goethe', 'Times New Roman', serif",
            margin: 0,
            opacity: 0.9,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontWeight: 'normal',
            lineHeight: 1
          }}>
            Introduction
          </h2>
          <span style={{
            color: '#e6c88e',
            opacity: 0.7,
            fontSize: isMobile ? '1.4rem' : '1.8rem',
            lineHeight: 1,
            display: isMobile ? 'none' : 'inline'
          }}>|</span>
          <h2 style={{
            color: '#e6c88e',
            fontSize: isMobile ? '1.4rem' : '1.8rem',
            fontFamily: 'Georgia, serif',
            fontWeight: 'normal',
            margin: 0,
            opacity: 0.9,
            letterSpacing: '0.05em',
            lineHeight: 1
          }}>
            Introduction
          </h2>
        </div>
        <p style={{
          color: '#e6c88e',
          fontSize: isMobile ? '1rem' : '1.1rem',
          lineHeight: '1.8',
          textAlign: 'justify',
          fontFamily: 'Georgia, serif',
          paddingLeft: isMobile ? '1rem' : '2rem',
        }}>
          Hi, my name is James, an enthusiast problem solver and love conquering challenges. with full stack software engineer and AI background.
        </p>
      </article>
    </div>
  )
}

export default ContentSection 