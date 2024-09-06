import { z } from 'zod';

export const PedidoSchema = z.object({
  id: z.string().uuid(),
  dataEmissao: z.date(),
  endereco: z.string().min(1, 'Endereço é obrigatório'),
  formaPagamento: z.string().min(1, 'Forma de pagamento é obrigatória'),
  combosAcai: z.array(z.string()),
  extras: z.array(z.string()),
  avaliacoes: z.array(z.string()),
});
