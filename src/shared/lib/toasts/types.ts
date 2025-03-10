import { NotificationArgsProps } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';

export interface ToastContextType {
  notificationApi: NotificationInstance;
}

export type ToastProps = {
  message: NotificationArgsProps['message'];
  key?: NotificationArgsProps['key'];
};

export type ToastType = keyof Omit<NotificationInstance, 'destroy' | 'open'>;
