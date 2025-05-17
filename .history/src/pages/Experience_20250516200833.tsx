import React from 'react';

const Experience: React.FC = () => {
  return (
    <section 
      id="experience"
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div style={{
        marginBottom: '2rem',
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        gap: '1rem'
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

      {/* Content will go here */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        {/* Add your experience content here */}
      </div>
    </section>
  );
};

export default Experience; 