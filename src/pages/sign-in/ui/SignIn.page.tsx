import { SignInForm } from '@features/auth';

import styles from './signInPage.module.scss';

export function SignInPage() {
  return (
    <div className={styles.signInPage}>
      <SignInForm />
    </div>
  );
}
