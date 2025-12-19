import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import type { ThemeContextValue } from './ThemeProvider';

function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

export { useTheme };
