import { useAppParamsStore, useAppSettings } from '@entities/app-params';
import { Theme } from '@shared/theme';

export const useAppChangeTheme = () => {
  const { setAppTheme } = useAppSettings();
  const appParams = useAppParamsStore(state => state.appParams);
  const removeAppParam = useAppParamsStore(state => state.removeAppParam);
  const appTheme = appParams.get('theme') as Theme | undefined;

  const setLightTheme = () => {
    setAppTheme('light');
  };

  const setDarkTheme = () => {
    setAppTheme('dark');
  };

  const setSystemTheme = () => {
    removeAppParam('theme');
  };

  return {
    appTheme,
    setLightTheme,
    setDarkTheme,
    setSystemTheme,
  };
};
