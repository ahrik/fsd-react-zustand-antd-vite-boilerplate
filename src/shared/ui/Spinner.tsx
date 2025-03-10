import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin, SpinProps } from 'antd';

const fullStyle = {
  display: 'grid',
  height: '100%',
  left: 0,
  placeItems: 'center',
  position: 'absolute',
  top: 0,
  width: '100%',
};

type Props = SpinProps & {
  isFullScreen?: boolean;
};

export const Spinner = ({ isFullScreen, ...spinProps }: Props) => {
  const styles = isFullScreen ? fullStyle : {};

  return (
    <Flex align="center" gap="middle" style={styles}>
      <Spin indicator={<LoadingOutlined spin />} size="large" {...spinProps} />
    </Flex>
  );
};
