import { createContext } from 'react';
import { ToastContextType } from './types';

export const ToastContext = createContext<ToastContextType | null>(null);
