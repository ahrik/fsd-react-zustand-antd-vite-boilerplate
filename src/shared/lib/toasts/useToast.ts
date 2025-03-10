import { useContext } from 'react';
import { ToastContext } from './toast-context';
import { ToastProps, ToastType } from './types';

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const getToast = (type: ToastType) => (message: ToastProps['message'], key?: ToastProps['key']) => {
    context.notificationApi[type]({ message, key });
  };

  const destroyToast = (key: ToastProps['key']) => {
    context.notificationApi.destroy(key);
  };

  return {
    addSuccessToast: getToast('success'),
    addErrorToast: getToast('error'),
    addInfoToast: getToast('info'),
    addWarningToast: getToast('warning'),

    destroyToast,
  };
};
