import clsx from 'clsx';
import LogoIcon from '../icons/logo.svg?react';

import styles from './logo.module.scss';

type Props = {
  text?: string;
};

export const Logo = ({ text }: Props) => (
  <div className={clsx(styles.logo, text && styles.logoHidedText)}>
    <div className={styles.logoIcon}>
      <LogoIcon width={32} height={32} />
    </div>
    {text && <div className={styles.logoText}>{text}</div>}
  </div>
);
