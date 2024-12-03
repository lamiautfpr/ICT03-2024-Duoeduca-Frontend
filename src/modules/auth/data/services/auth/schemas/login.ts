import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({ message: 'Você precisa inserir um e-mail.' })
    .email({ message: 'Você precisa inserir um e-mail válido.' }),
  password: z
    .string({ message: 'Você precisa inserir uma senha.' })
    .min(4, { message: 'Sua senha precisa ter no mínimo 6 caracteres.' }),
});

export type ILoginSchema = z.infer<typeof loginSchema>;

export { loginSchema };
