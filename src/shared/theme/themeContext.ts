import { createContext, useContext } from 'react';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
