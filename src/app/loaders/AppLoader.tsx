import { PropsWithChildren, useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import { loadSession } from '@entities/session';
import { ROUTERS } from '@shared/constants';
import { Spinner } from '@shared/ui/spinner';
import { useAppInterceptor } from '@/app/useAppInterceptor';

export function AppLoader({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);

  useAppInterceptor();

  const loading = async () => {
    try {
      await loadSession();
    } catch (error: unknown | Error) {
      console.error(error);
      redirect(ROUTERS.SIGN_IN);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loading();
  }, []);

  return isLoading ? <Spinner isFullScreen /> : children;
}
