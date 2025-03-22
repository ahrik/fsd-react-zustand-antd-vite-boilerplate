import { useEffect, useState } from 'react';
import { Theme } from './themeContext';

export const useDetectChangeSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState<Theme>();

  const handleChange = (event: MediaQueryListEvent) => {
    const theme = event.matches ? 'dark' : 'light';
    setSystemTheme(theme);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    systemTheme,
  };
};
