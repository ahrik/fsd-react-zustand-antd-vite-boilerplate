import { ComponentPropsWithRef } from 'react';
import { FieldValues, FormProvider as ReactHookFormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { Form, FormProps } from 'antd';

export type FormProviderProps<T extends FieldValues> = Omit<ComponentPropsWithRef<'form'>, 'onSubmit'> & {
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  fullWidth?: boolean;
  formItemLayout?: {
    labelCol?: FormProps['labelCol'];
    wrapperCol?: FormProps['wrapperCol'];
  };
  layout?: FormProps['layout'];
};

export const FormProvider = <T extends FieldValues>(props: FormProviderProps<T>) => {
  const { methods, formItemLayout, onSubmit, onChange, children } = props;
  const { handleSubmit } = methods;

  return (
    <ReactHookFormProvider {...methods}>
      <Form
        onFinish={handleSubmit(onSubmit)}
        onChange={onChange}
        variant="outlined"
        {...formItemLayout}
        layout="vertical"
      >
        {children}
      </Form>
    </ReactHookFormProvider>
  );
};
