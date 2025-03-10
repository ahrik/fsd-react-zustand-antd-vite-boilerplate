import { nanoid } from 'nanoid';
import { Session, SignIn } from '../generated_api';
import { persistStorage } from './persist-storage';
import { usersRepository } from './users.repository';

const SESSION_STORAGE_KEY = 'session_storage';
export const sessionRepository = {
  getSession: () => {
    return persistStorage.getItemSafe<Session | undefined>(SESSION_STORAGE_KEY, undefined);
  },

  signIn: async (value: SignIn) => {
    const users = await usersRepository.getUsers();

    const user = users.find(user => user.email === value.email && user.password === value.password);

    if (!user) {
      return undefined;
    }

    const { id, name, email, avatarId, role } = user;

    const session = {
      avatarId,
      email,
      name,
      role,
      userId: id,
      id: nanoid(),
    } satisfies Session;

    return persistStorage.setItemSafe(SESSION_STORAGE_KEY, session);
  },

  signOut: () => {
    return persistStorage.setItemSafe(SESSION_STORAGE_KEY, undefined);
  },
};
