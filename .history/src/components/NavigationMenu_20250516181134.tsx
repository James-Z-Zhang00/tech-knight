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
              fontSize: '1.5rem',
              textDecoration: 'none',
              fontFamily: 'Georgia, serif',
              letterSpacing: '0.05em',
              transition: 'all 0.4s ease',
              opacity: 0.85,
              cursor: 'pointer',
              position: 'relative',
              padding: '0.5rem 1rem',
              textShadow: '0 0 0px rgba(230, 200, 142, 0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.textShadow = '0 0 20px rgba(230, 200, 142, 0.8), 0 0 30px rgba(230, 200, 142, 0.6), 0 0 40px rgba(230, 200, 142, 0.4)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.color = '#f0d4a0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.85';
              e.currentTarget.style.textShadow = '0 0 0px rgba(230, 200, 142, 0)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.color = '#e6c88e';
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