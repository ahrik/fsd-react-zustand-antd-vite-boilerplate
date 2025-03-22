import { SignOutButton } from '@features/auth';
import { Profile } from '@features/profile';
import { Logo } from '@shared/ui/Logo';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <Logo />
        </div>

        <div className={styles.headerNav}>Nav</div>

        <div className={styles.headerActions}>
          <SignOutButton />
          <Profile />
        </div>
      </header>
    </div>
  );
};
