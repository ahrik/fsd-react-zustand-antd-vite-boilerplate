import { delay, http, HttpResponse } from 'msw';
import { CreateUser, SignIn } from '../generated_api';
import { sessionRepository } from './session.repository';
import { usersRepository } from './users.repository';

const needAuthorization = async () => {
  return new HttpResponse(null, {
    status: 401,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const unauthorized = async () => {
  return new HttpResponse(null, {
    status: 403,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const ok = async (body?: unknown) => {
  return new HttpResponse(body ? JSON.stringify(body) : null, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getHandlers = async () => {
  const users = await usersRepository.getUsers();

  if (users.length === 0) {
    await usersRepository.addUser({
      name: 'Администрюк',
      email: 'admin@mail.com',
      password: 'admin123',
      role: 'admin',
    });
  }

  return [
    http.get('/api/users', async () => {
      await delay(1000);
      const sesson = await sessionRepository.getSession();

      if (!sesson) {
        return needAuthorization();
      }

      const users = await usersRepository.getUsers();

      return ok(users);
    }),

    http.post('/api/users', async ({ request }) => {
      await delay(1000);
      const sesson = await sessionRepository.getSession();

      if (!sesson) {
        return needAuthorization();
      }

      if (sesson.role !== 'admin') {
        return unauthorized();
      }

      const body = await request.json();

      const newUser = await usersRepository.addUser(body as CreateUser);

      await delay(1000);

      return ok(newUser);
    }),

    http.delete('/api/users/:userId', async ({ params }) => {
      const userId = params.userId as string;

      await usersRepository.removeUser(userId);

      await delay(1000);

      return ok();
    }),

    http.get('/api/session/me', async () => {
      await delay(1000);
      const sesson = await sessionRepository.getSession();

      if (!sesson) {
        return needAuthorization();
      }

      return ok(sesson);
    }),

    http.post('/api/session/sign-in', async ({ request }) => {
      const body = await request.json();

      const res = await sessionRepository.signIn(body as SignIn);

      if (!res) return needAuthorization();

      await delay(1000);

      return ok(res);
    }),

    http.post('/api/session/sign-out', async () => {
      await delay(1000);
      const sesson = await sessionRepository.getSession();

      if (!sesson) {
        return needAuthorization();
      }

      await sessionRepository.signOut();

      return ok();
    }),
  ];
};
