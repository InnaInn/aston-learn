import React from 'react';
import styles from './withLoading.module.css';
import type { ComponentType, FC, ReactElement } from 'react';

type WithLoadingProps = {
  isLoading: boolean;
};

function withLoading<P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P & WithLoadingProps> {
  return function WithLoadingComponent(props: P & WithLoadingProps): ReactElement {
    const { isLoading, ...rest } = props;

    if (isLoading) {
      return (
        <div className={styles.loaderWrapper}>
          <div className={styles.spinner}></div>
          <p>Загрузка данных...</p>
        </div>
      );
    }

    return <WrappedComponent {...(rest as P)} />;
  };
}

export default withLoading;