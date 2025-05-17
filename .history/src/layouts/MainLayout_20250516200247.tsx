import React from 'react';
import NavigationMenu from '../components/shared/NavigationMenu';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      background: '#2c1810',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      <NavigationMenu />
      {children}
    </div>
  );
};

export default MainLayout; 