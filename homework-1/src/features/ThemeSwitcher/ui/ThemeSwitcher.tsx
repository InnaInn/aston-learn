import { useTheme } from '../../../shared/lib/theme/useTheme';
import styles from './ThemeSwitcher.module.css';
import type { ChangeEventHandler } from 'react';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const handleToggle: ChangeEventHandler<HTMLInputElement> = () => {
    toggleTheme();
  };

  return (
    <label className={styles.switcher}>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={handleToggle}
      />
      <span className={styles.slider}></span>
    </label>
  );
}

export default ThemeSwitcher;