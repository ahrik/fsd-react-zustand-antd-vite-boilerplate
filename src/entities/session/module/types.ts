import { api } from '@shared/api';

type Session = api.Session;

export type SessionStore = {
  currentSession?: Session;
  loadSession: () => Promise<Session>;
  setCurrentSession: (session: Session) => void;
  removeSession: () => void;
};
