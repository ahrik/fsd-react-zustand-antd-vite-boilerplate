import { StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { create } from '@shared/lib/zustand';
import { AppParams, AppParamsStoreActions, AppParamsStoreState } from './types';

type AppParamsStore = AppParamsStoreActions & AppParamsStoreState;

const appParamsStoreSlice: StateCreator<AppParamsStore, [['zustand/devtools', never]]> = set => ({
  appParams: new Map(),

  setAppParams: <K extends keyof AppParams>(key: K, value: AppParams[K]) => {
    set(state => ({ appParams: new Map(state.appParams).set(key, value) }), false, 'appParamsStore/setAppParams');
  },

  removeAppParam: <K extends keyof AppParams>(key: K) => {
    set(
      state => {
        const updatedMap = new Map(state.appParams);
        updatedMap.delete(key);

        return { appParams: updatedMap };
      },
      false,
      'appParamsStore/removeAppParam'
    );
  },
});

export const useAppParamsStore = create<AppParamsStore>()(
  devtools(
    (...args) => ({
      ...appParamsStoreSlice(...args),
    }),
    {}
  )
);

export const getAppParams = <K extends keyof AppParams>(key: K): AppParams[K] | undefined =>
  useAppParamsStore.getState().appParams.get(key) as AppParams[K] | undefined;
