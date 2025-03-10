import { ReactNode, useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import { ROUTERS } from '@shared/constants';
import { Spinner } from '@shared/ui/Spinner';
import { useSession } from '@/entities/session';
import { useAppInterceptor } from '../useAppInterceptor';

export function AppLoader({ children }: { children?: ReactNode }) {
  const loadSession = useSession(s => s.loadSession);
  const [isLoading, setIsLoading] = useState(true);

  useAppInterceptor();

  useEffect(() => {
    setIsLoading(true);

    Promise.all([loadSession()])
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error: Error | unknown) => {
        console.error(error);
        redirect(ROUTERS.SIGN_IN);
      });
  }, [loadSession]);

  return (
    <>
      {isLoading && <Spinner isFullScreen />}
      {isLoading ? null : children}
    </>
  );
}
