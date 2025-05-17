import React from 'react';

const Background: React.FC = () => {
  return (
    <section 
      id="background"
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h2 style={{
        color: '#e6c88e',
        fontSize: '2.5rem',
        fontFamily: "'Goethe', 'Times New Roman', serif",
      }}>
        Background Section Coming Soon
      </h2>
    </section>
  );
};

export default Background; 