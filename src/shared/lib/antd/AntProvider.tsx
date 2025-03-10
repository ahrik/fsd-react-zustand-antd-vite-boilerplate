import { PropsWithChildren } from 'react';
import { ConfigProvider, theme as themeAtnd } from 'antd';
import { theme } from './theme/theme';
import { useThemeAlgorithm } from './useThemeAlgorithm';

export function AntProvider({ children }: PropsWithChildren) {
  const { systemTheme } = useThemeAlgorithm();

  return (
    <ConfigProvider
      csp={{ nonce: 'admin-' }}
      theme={{ algorithm: systemTheme === 'light' ? themeAtnd.defaultAlgorithm : themeAtnd.darkAlgorithm, ...theme }}
    >
      {children}
    </ConfigProvider>
  );
}
