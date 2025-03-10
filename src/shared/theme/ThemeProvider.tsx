import { PropsWithChildren, useEffect, useState } from 'react';
import { Theme, ThemeContext } from './themeContext';
import { getSystemTheme } from './utils';

const THEME_LOCAL_STORAGE_KEY = 'theme';

type Props = PropsWithChildren & {
  defaultTheme?: Theme;
};

export const ThemeProvider = ({ children, defaultTheme }: Props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme || getSystemTheme());

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
