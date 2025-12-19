import React from 'react';
import styles from './Button.module.css';
import type { ReactNode, ReactElement, MouseEventHandler } from 'react';

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

function Button({ onClick, children }: ButtonProps): ReactElement {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;