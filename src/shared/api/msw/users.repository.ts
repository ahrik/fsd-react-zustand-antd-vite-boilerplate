import { nanoid } from 'nanoid';
import { CreateUser, User } from '../generated_api';
import { persistStorage } from './persist-storage';

type UserType = User & {
  password: string;
};

const USERS_STORAGE_KEY = 'users_storsage';
export const usersRepository = {
  getUsers: () => {
    return persistStorage.getItemSafe<UserType[]>(USERS_STORAGE_KEY, []);
  },

  addUser: async (value: Omit<CreateUser, 'id'>) => {
    const users = await usersRepository.getUsers();
    const newUser = {
      ...value,
      id: nanoid(),
    };
    await persistStorage.setItemSafe<UserType[]>(USERS_STORAGE_KEY, users.concat([newUser]));

    return newUser;
  },

  removeUser: async (userId: string) => {
    const users = await usersRepository.getUsers();
    await persistStorage.setItemSafe(
      USERS_STORAGE_KEY,
      users.filter(user => user.id !== userId)
    );
  },
};
