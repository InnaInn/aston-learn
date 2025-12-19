import styles from './Footer.module.css';
import { useTheme } from '../../shared/lib/theme/useTheme';
import type { ReactElement } from 'react';

function Footer(): ReactElement {
  const { theme } = useTheme();
  return (
    <div className={`${styles.footer} ${theme}`}>
      © 2025 — Учебный проект, Иванова Инна
    </div>
  );
}

export default Footer;