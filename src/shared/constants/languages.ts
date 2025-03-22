export const LANGUAGES = {
  En: 'en',
  Ru: 'ru',
} as const;

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];
