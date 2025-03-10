import { PropsWithChildren } from 'react';
import { notification } from 'antd';
import { ToastContext } from './toast-context';

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [notificationApi, contextHolder] = notification.useNotification();

  return (
    <ToastContext.Provider value={{ notificationApi }}>
      {contextHolder}
      {children}
    </ToastContext.Provider>
  );
};
