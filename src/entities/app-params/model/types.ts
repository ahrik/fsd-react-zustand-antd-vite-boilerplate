import { Language } from '@shared/constants';
import { Theme } from '@shared/theme';

export type AppParams = {
  language: Language;
  theme: Theme;
};

export type AppParamsStoreState = {
  appParams: Map<keyof AppParams, AppParams[keyof AppParams]>;
};

export type AppParamsStoreActions = {
  setAppParams: (key: keyof AppParams, value: AppParams[keyof AppParams]) => void;
  removeAppParam: (key: keyof AppParams) => void;
};
