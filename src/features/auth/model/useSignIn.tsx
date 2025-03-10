import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSession } from '@entities/session';
import { api } from '@shared/api';
import { ROUTERS } from '@shared/constants';
import { useToast } from '@shared/lib/toasts';
import { SignIn } from '../types';

export const useSignIn = () => {
  const navigate = useNavigate();
  const { addSuccessToast } = useToast();
  const { t } = useTranslation();
  const setCurrentSession = useSession(({ setCurrentSession }) => setCurrentSession);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = (signInParams: SignIn) => {
    setIsLoading(true);
    api
      .signIn(signInParams)
      .then(session => {
        setCurrentSession(session);
        addSuccessToast(t('sign-in'));
        navigate(ROUTERS.ROOT);

        return session;
      })
      .catch((error: Error | unknown) => {
        console.error(error);
        setError(t('sign-in-error'));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    error,
    isLoading,
    signIn,
  };
};
