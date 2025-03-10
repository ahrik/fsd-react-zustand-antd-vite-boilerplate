export const IS_DEV = process.env.NODE_ENV === 'development';
export const API_BASE_URL = import.meta.env.VITE_API_BASE || '/api';
export const DEFAULT_LANGUAGE = import.meta.env.VITE_DEFAULT_LANGUAGE || 'en';
export const USE_MSW = import.meta.env.VITE_USE_MSW || 'false';
