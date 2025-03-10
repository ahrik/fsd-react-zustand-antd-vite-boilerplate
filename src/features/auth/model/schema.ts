import { z } from 'zod';

export const SingInFormFieldsSchema = z.object({
  email: z.string().email({ message: 'Укажите правильный Email' }),
  password: z.string().min(5, { message: 'Password is too short' }).max(20, { message: 'Password is too long' }),
});
