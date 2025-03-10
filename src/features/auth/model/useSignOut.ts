import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@entities/session';
import { api } from '@shared/api';
import { ROUTERS } from '@shared/constants';

export function useSignOut() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const removeSession = useSession(({ removeSession }) => removeSession);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signOut = async () => {
    setIsLoading(true);

    await api
      .signOut()
      .then(response => {
        navigate(ROUTERS.SIGN_IN);

        return response;
      })
      .catch((error: Error | unknown) => {
        console.error(error);
        setError(t('something-wrong'));
      })
      .finally(() => {
        setIsLoading(false);
      });

    return removeSession();
  };

  return {
    error,
    isLoading,
    signOut,
  };
}
