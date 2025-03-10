import { useEffect } from 'react';
import { useTheme } from './themeContext';

export const useDetectChangeSystemTheme = () => {
  const { setTheme } = useTheme();

  const handleChange = (event: MediaQueryListEvent) => {
    const systemTheme = event.matches ? 'dark' : 'light';
    setTheme(systemTheme);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
};
