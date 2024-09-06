import { z } from 'zod';

export const ClienteSchema = z.object({
  cpf: z
    .string()
    .min(11, 'CPF deve ter no mínimo 11 caracteres')
    .max(14, 'CPF deve ter no máximo 14 caracteres'),
  nome: z.string().min(1, 'Nome é obrigatório'),
  telefone: z
    .string()
    .min(10, 'Telefone deve ter no mínimo 10 dígitos')
    .max(15, 'Telefone deve ter no máximo 15 dígitos'),
  cidade: z.string().min(1, 'Cidade é obrigatória'),
  endereco: z.string().min(1, 'Endereço é obrigatório'),
});
