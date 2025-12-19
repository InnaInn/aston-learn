import React from 'react';
import type { PropsWithChildren, ReactElement } from 'react';
import styles from './MainLayout.module.css';

type MainLayoutProps = PropsWithChildren<{}>;

function MainLayout({ children }: MainLayoutProps): ReactElement {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default MainLayout;