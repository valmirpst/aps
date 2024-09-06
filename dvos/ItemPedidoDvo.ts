import { z } from 'zod';

export const ItemPedidoSchema = z.object({
  id: z.string().uuid(),
  quantidade: z.number().int().min(1, 'Quantidade deve ser pelo menos 1'),
  descricao: z.string().min(1, 'Descrição é obrigatória'),
  valor: z.number().positive('Valor deve ser um valor positivo'),
});
