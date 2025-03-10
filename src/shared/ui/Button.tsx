import { forwardRef, PropsWithChildren } from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';

type Props = ButtonProps & PropsWithChildren;

export const Button = forwardRef<HTMLButtonElement, Props>(({ children, ...restProps }: Props, ref) => {
  return (
    <AntdButton ref={ref} {...restProps}>
      {children}
    </AntdButton>
  );
});
