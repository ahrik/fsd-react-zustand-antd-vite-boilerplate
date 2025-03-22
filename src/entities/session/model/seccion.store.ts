import { StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { api } from '@shared/api';
import { create } from '@shared/lib/zustand';
import { SessionStore } from './types';

const sessionStoreSlice: StateCreator<SessionStore, [['zustand/devtools', never]]> = set => ({
  currentSession: null,

  loadSession: async () => {
    const session = await api.getSession();
    set({ currentSession: session }, undefined, 'sessionStore/loadSession');

    return session;
  },

  setCurrentSession: session => {
    set({ currentSession: session }, undefined, 'sessionStore/setCurrentSession');
  },

  removeSession: () => {
    set({ currentSession: undefined }, undefined, 'sessionStore/removeSession');
  },
});

export const useSessionStore = create<SessionStore>()(
  devtools(
    (...args) => ({
      ...sessionStoreSlice(...args),
    }),
    {}
  )
);

export const loadSession = useSessionStore.getState().loadSession;
