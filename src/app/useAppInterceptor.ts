import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiInstance } from '@/shared/api/api-instance';
import { ROUTERS } from '@/shared/constants';

export function useAppInterceptor() {
  const navigation = useNavigate();

  useEffect(() => {
    apiInstance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        // 403 handler
        if (error.response.status === 403) {
          navigation(ROUTERS.FORBIDDEN, { replace: true });
        }
        throw error;
      }
    );

    apiInstance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        // 401 handler
        if (error.response.status === 401) {
          navigation(ROUTERS.SIGN_IN, { replace: true });
        }
        throw error;
      }
    );
  }, [navigation]);
}
