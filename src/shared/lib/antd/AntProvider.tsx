import { PropsWithChildren } from 'react';
import { ConfigProvider, theme as themeAtnd } from 'antd';
import { theme } from './theme/theme';
import { useThemeAlgorithm } from './useThemeAlgorithm';

type Props = PropsWithChildren & {
  appTheme?: 'light' | 'dark';
};

export function AntProvider({ children, appTheme }: Props) {
  const { systemTheme } = useThemeAlgorithm();
  const currentTheme = appTheme || systemTheme;

  return (
    <ConfigProvider
      csp={{ nonce: 'admin-' }}
      theme={{ algorithm: currentTheme === 'light' ? themeAtnd.defaultAlgorithm : themeAtnd.darkAlgorithm, ...theme }}
    >
      {children}
    </ConfigProvider>
  );
}
