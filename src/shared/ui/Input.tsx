import { forwardRef, PropsWithChildren } from 'react';
import { Input as AntdInput, InputProps as AntdInputProps, InputRef } from 'antd';

export type InputProps = AntdInputProps & PropsWithChildren;

export const Input = forwardRef<InputRef, InputProps>(({ children, ...restProps }: InputProps, ref) => {
  const TypedInput = restProps.type === 'password' ? AntdInput.Password : AntdInput;

  return (
    <TypedInput ref={ref} {...restProps}>
      {children}
    </TypedInput>
  );
});
