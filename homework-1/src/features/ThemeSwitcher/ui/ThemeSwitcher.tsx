import { useTheme } from '../../../shared/lib/theme/useTheme';
import styles from './ThemeSwitcher.module.css';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className={styles.switcher}>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <span className={styles.slider}></span>
    </label>
  );
}

export default ThemeSwitcher;