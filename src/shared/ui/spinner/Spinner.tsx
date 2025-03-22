import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin, SpinProps } from 'antd';
import clsx from 'clsx';

import styles from './spinner.module.scss';

type Props = SpinProps & {
  isFullScreen?: boolean;
};

export const Spinner = ({ isFullScreen, ...spinProps }: Props) => {
  return (
    <Flex align="center" gap="middle" className={clsx(isFullScreen && styles.spinnerIsFull)}>
      <Spin indicator={<LoadingOutlined spin />} size="large" {...spinProps} />
    </Flex>
  );
};
