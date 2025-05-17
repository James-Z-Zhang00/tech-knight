import React, { useState, useEffect } from 'react';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 1100,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        display: 'block'
      }}
    >
      <div style={{
        width: '30px',
        height: '3px',
        background: '#e6c88e',
        transition: 'all 0.3s ease',
        transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
        marginBottom: '6px'
      }} />
      <div style={{
        width: '30px',
        height: '3px',
        background: '#e6c88e',
        transition: 'all 0.3s ease',
        opacity: isOpen ? 0 : 1,
        marginBottom: '6px'
      }} />
      <div style={{
        width: '30px',
        height: '3px',
        background: '#e6c88e',
        transition: 'all 0.3s ease',
        transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
      }} />
    </button>
  );
};

export default HamburgerButton; 