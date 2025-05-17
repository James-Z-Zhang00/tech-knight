import React from 'react';

interface ExperienceLayoutProps {
  children: React.ReactNode;
}

const ExperienceLayout: React.FC<ExperienceLayoutProps> = ({ children }) => {
  return (
    <div style={{
      width: '100%',
      background: '#2c1810',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        marginBottom: '2rem',
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        gap: '1rem',
        padding: '2rem'
      }}>
        <h2 style={{
          color: '#e6c88e',
          fontSize: '2.2rem',
          fontFamily: "'Goethe', 'Times New Roman', serif",
          margin: 0,
          opacity: 0.9,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          fontWeight: 'normal',
          lineHeight: 1
        }}>
          Experience
        </h2>
        <span style={{
          color: '#e6c88e',
          opacity: 0.7,
          fontSize: '2rem',
          lineHeight: 1
        }}>|</span>
        <h2 style={{
          color: '#e6c88e',
          fontSize: '1.8rem',
          fontFamily: 'Georgia, serif',
          fontWeight: 'normal',
          margin: 0,
          opacity: 0.9,
          letterSpacing: '0.05em',
          lineHeight: 1
        }}>
          Experience
        </h2>
      </div>
      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem 2rem'
      }}>
        {children}
      </main>
    </div>
  );
};

export default ExperienceLayout; 