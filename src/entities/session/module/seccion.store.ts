import { api } from '@shared/api';
import { createStore } from '@shared/lib/zustand';
import { SessionStore } from './types';

export const useSession = createStore<SessionStore>(set => ({
  currentSession: undefined,

  loadSession: async () => {
    const session = await api.getSession();
    set({ currentSession: session });

    return session;
  },

  setCurrentSession: session => {
    set({ currentSession: session });
  },

  removeSession: () => {
    set({ currentSession: undefined });
  },
}));
