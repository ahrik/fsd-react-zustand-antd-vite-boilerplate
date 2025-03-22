import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppParamsStore } from '@entities/app-params';
import { useDetectChangeSystemTheme, useTheme } from '@shared/theme';

import styles from './appLayout.module.scss';

export function AppLayout() {
  const appParams = useAppParamsStore(state => state.appParams);
  const { systemTheme } = useDetectChangeSystemTheme();
  const { setTheme } = useTheme();

  useEffect(() => {
    if (!appParams.get('theme') && systemTheme) {
      setTheme(systemTheme);
    }
  }, [systemTheme]);

  return (
    <div className={styles.appLayout}>
      <Outlet />
    </div>
  );
}
