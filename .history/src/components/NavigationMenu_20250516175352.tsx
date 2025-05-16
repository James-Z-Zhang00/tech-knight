import React from 'react';

const NavigationMenu: React.FC = () => {
  return (
    <div style={{
      padding: '2rem',
      color: '#e6c88e',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2.5rem',
        alignItems: 'center'
      }}>
        {['Home', 'Background', 'Skills', 'Experience', 'Projects'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: '#e6c88e',
              fontSize: '1.2rem',
              textDecoration: 'none',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
              opacity: 0.9,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.textShadow = '0 0 10px rgba(230, 200, 142, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default NavigationMenu; 