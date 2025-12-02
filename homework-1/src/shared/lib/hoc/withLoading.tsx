import React from 'react';
import styles from './withLoading.module.css';

type WithLoadingProps = {
  isLoading: boolean;
};

function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLoadingProps> {
  return function WithLoadingComponent(props: P & WithLoadingProps) {
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