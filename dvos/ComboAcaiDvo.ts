import { z } from 'zod';

export const ComboAcaiSchema = z.object({
  id: z.string().uuid(),
  nome: z.string().min(1, 'Nome é obrigatório'),
  preco: z.number().positive('Preço deve ser um valor positivo'),
  tamanhoMl: z.number().int().min(1, 'Tamanho em mL deve ser pelo menos 1'),
  adicionais: z.array(z.string()).nonempty('Deve ter pelo menos um adicional'),
});
