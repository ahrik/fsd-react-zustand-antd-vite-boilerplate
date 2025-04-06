import { setupWorker } from 'msw/browser';
import { getHandlers } from './handlers';

export const initWorker = async () => {
  const handlers = await getHandlers();

  return setupWorker(...handlers).start();
};
