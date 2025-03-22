import { PropsWithChildren } from 'react';
import { useAppParamsStore } from '@entities/app-params';
import { AntProvider } from '@shared/lib/antd';
import { ComposeChildren } from '@shared/lib/react';
import { ToastProvider } from '@shared/lib/toasts';
import { Theme, ThemeProvider } from '@shared/theme';

export function AppProvider({ children }: PropsWithChildren) {
  const appParams = useAppParamsStore(state => state.appParams);
  const appTheme = appParams.get('theme') as Theme | undefined;

  return (
    <ComposeChildren>
      <ThemeProvider />
      <AntProvider appTheme={appTheme} />
      <ToastProvider />
      {children}
    </ComposeChildren>
  );
}
