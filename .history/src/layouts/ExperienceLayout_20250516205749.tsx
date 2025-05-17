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