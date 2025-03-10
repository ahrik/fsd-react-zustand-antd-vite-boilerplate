import { Outlet } from 'react-router-dom';
import { Logo } from '@shared/ui/Logo';

import styles from './publicLayout.module.scss';

export function PublicLayout() {
  return (
    <div className={styles.publicLayout}>
      <main className={styles.publicLayoutContent}>
        <header className={styles.publicLayoutLogo}>
          <Logo text="Admin" />
        </header>

        <section className={styles.publicLayoutChildren}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
