import { Controller, useFormContext } from 'react-hook-form';
import { Form } from 'antd';
import { Input, InputProps } from '@shared/ui/Input';

export type RHFTextFieldProps = InputProps & {
  name: string;
  label: string;
};

export const RHFInput = (props: RHFTextFieldProps) => {
  const { name, label, ...restOfProps } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, onChange, ...restOfFieldProps }, fieldState: { error } }) => (
        <Form.Item label={label} validateStatus={error && ''}>
          <Input
            value={value}
            ref={ref}
            onChange={onChange}
            {...(error ? { status: 'error' } : {})}
            {...restOfFieldProps}
            {...restOfProps}
          />
        </Form.Item>
      )}
    />
  );
};
