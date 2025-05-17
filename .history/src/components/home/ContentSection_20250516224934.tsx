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
        <p style={{
          color: '#e6c88e',
          fontSize: isMobile ? '1rem' : '1.4rem',
          lineHeight: '1.8',
          textAlign: 'justify',
          fontFamily: "'Goethe', 'Times New Roman', serif",
          paddingLeft: isMobile ? '1rem' : '2rem',
        }}>
          Hi, my name is James, an enthusiast problem solver and love conquering challenges. I have full stack software engineer and AI background.
        </p>
        <br />
        <p style={{
          color: '#e6c88e',
          fontSize: isMobile ? '1rem' : '1.4rem',
          lineHeight: '1.8',
          textAlign: 'justify',
          fontFamily: 'Georgia, serif',
          paddingLeft: isMobile ? '1rem' : '2rem',
        }}>
          Hi, my name is James, an enthusiast problem solver and love conquering challenges. I have full stack software engineer and AI background.
        </p>
      </article>
    </div>
  )
}

export default ContentSection 