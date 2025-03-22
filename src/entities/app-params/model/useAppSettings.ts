import { Theme, useTheme } from '@shared/theme';
import { useAppParamsStore } from './app-params.store';

export const useAppSettings = () => {
  const setAppParams = useAppParamsStore(state => state.setAppParams);
  const { setTheme } = useTheme();

  const setAppTheme = (userTheme: Theme) => {
    const theme = userTheme;
    setAppParams('theme', theme);
    setTheme(theme);
  };

  return {
    setAppTheme,
  };
};
