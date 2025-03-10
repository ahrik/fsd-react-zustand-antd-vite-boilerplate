import { useEffect, useState } from 'react';

export const useThemeAlgorithm = () => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const [theme, setTheme] = useState<'light' | 'dark'>(mediaQuery.matches ? 'dark' : 'light');

  const handleChange = (event: MediaQueryListEvent) => {
    const systemTheme = event.matches ? 'dark' : 'light';
    setTheme(systemTheme);
  };

  useEffect(() => {
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    systemTheme: theme,
  };
};
