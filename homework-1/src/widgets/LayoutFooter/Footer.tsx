import styles from './Footer.module.css';
import { useTheme } from '../../shared/lib/theme/useTheme';

function Footer() {
  const { theme } = useTheme();
  return (
    <div className={`${styles.footer} ${theme}`}>
      © 2025 — Учебный проект, Иванова Инна
    </div>
  );
}

export default Footer;