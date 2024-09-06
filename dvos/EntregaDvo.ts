import { z } from 'zod';
import { ComboAcaiSchema } from '../dvos/ComboAcaiDvo';

export const EntregaSchema = z.object({
  id: z.string().uuid(),
  cpfEntregador: z
    .string()
    .min(11, 'CPF do entregador deve ter no mínimo 11 caracteres')
    .max(14, 'CPF do entregador deve ter no máximo 14 caracteres'),
  combosAcai: z.array(ComboAcaiSchema),
  endereco: z.string().min(1, 'Endereço é obrigatório'),
  status: z.enum(['Em preparo', 'Saindo para entrega', 'entregue']),
});
