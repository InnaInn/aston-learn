import React from 'react';
import styles from './MainLayout.module.css';

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default MainLayout;