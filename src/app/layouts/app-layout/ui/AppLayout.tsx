import { Outlet } from 'react-router-dom';
import { useDetectChangeSystemTheme } from '@shared/theme';

import styles from './appLayout.module.scss';

export function AppLayout() {
  useDetectChangeSystemTheme();

  return (
    <div className={styles.appLayout}>
      <Outlet />
    </div>
  );
}
