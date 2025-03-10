import { PropsWithChildren } from 'react';
import { AntProvider } from '@shared/lib/antd';
import { ComposeChildren } from '@shared/lib/react';
import { ToastProvider } from '@shared/lib/toasts';
import { ThemeProvider } from '@shared/theme';

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      <AntProvider />
      <ToastProvider />
      {children}
    </ComposeChildren>
  );
}
