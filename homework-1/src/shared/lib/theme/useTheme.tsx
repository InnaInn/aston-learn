import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

function useTheme() {
  return useContext(ThemeContext);
}

export { useTheme };