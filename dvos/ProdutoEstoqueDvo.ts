import { z } from 'zod';

export const ProdutoEstoqueSchema = z.object({
  id: z.string().uuid(),
  nome: z.string().min(1, 'Nome é obrigatório'),
  tamanho: z.string().min(1, 'Tamanho é obrigatório'),
  quantidade: z.number().int().min(0, 'Quantidade deve ser pelo menos 0'),
  validade: z.date(),
});
