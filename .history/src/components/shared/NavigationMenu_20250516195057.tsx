import React, { useState, useEffect } from 'react';
import HamburgerButton from './HamburgerButton';

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = ['Home', 'Background', 'Skills', 'Experience', 'Projects'];

  return (
    <>
      <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      
      <div style={{
        padding: isMobile ? '0' : '2rem',
        color: '#e6c88e',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        position: isMobile ? 'fixed' : 'relative',
        top: isMobile ? '0' : 'auto',
        left: isMobile ? '0' : 'auto',
        height: isMobile ? '100vh' : 'auto',
        width: isMobile ? '250px' : '100%',
        background: isMobile ? '#2c1810' : 'transparent',
        transform: isMobile ? `translateX(${isOpen ? '0' : '-100%'})` : 'none',
        transition: 'transform 0.3s ease',
        zIndex: 1000,
        boxShadow: isMobile ? (isOpen ? '2px 0 5px rgba(0,0,0,0.3)' : 'none') : 'none',
      }}>
        <nav style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          gap: isMobile ? '2rem' : '2.5rem',
          alignItems: 'center',
          height: isMobile ? '100%' : 'auto',
          padding: isMobile ? '4rem 1rem' : '0'
        }}>
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => isMobile && setIsOpen(false)}
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
                textShadow: '0 0 0px rgba(230, 200, 142, 0)',
                width: isMobile ? '100%' : 'auto',
                textAlign: isMobile ? 'left' : 'center'
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
      
      {isMobile && isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 999
          }}
        />
      )}
    </>
  );
};

export default NavigationMenu; 