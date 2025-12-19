import { createContext, useState } from 'react';
import type { PropsWithChildren, ReactElement, ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

function ThemeProvider({ children }: PropsWithChildren<{ children?: ReactNode }>): ReactElement {
  const [theme, setTheme] = useState<Theme>('light');

  function toggleTheme(): void {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
export { ThemeContext };