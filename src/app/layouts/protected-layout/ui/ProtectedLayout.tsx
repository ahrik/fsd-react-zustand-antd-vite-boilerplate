import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';

import styles from './protectedLayout.module.scss';

export function ProtectedLayout() {
  return (
    <div className={styles.protectedLayout}>
      <div className={styles.protectedLayoutHeader}>
        <Header />
      </div>

      <div className={styles.protectedLayoutContent}>
        <Outlet />
      </div>
    </div>
  );
}
