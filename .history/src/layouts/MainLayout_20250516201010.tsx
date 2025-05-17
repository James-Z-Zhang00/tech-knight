import React from 'react';
import NavigationMenu from '../components/shared/NavigationMenu';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{
      width: '100%',
      background: '#2c1810',
      position: 'relative'
    }}>
      <NavigationMenu />
      <main style={{
        width: '100%',
        minHeight: '100vh'
      }}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout; 