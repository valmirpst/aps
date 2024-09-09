import { AvaliacaoType } from './AvaliacaoType';
import { ClienteType } from './ClienteType';
import { FuncionarioType } from './FuncionarioType';
import { ItemPedidoType } from './ItemPedido';

export type PedidoType = {
  id: string;
  dataEmissao: Date;
  formaPagamento: string;
  status: 'Pendente' | 'Em preparo' | 'A caminho' | 'Entregue' | 'Cancelado';
  cpfCliente: ClienteType['cpf'];
  itensPedido: ItemPedidoType['id'][];
  avaliacoes: AvaliacaoType['id'][];
  cpfFuncionarioResposavel: FuncionarioType['cpf'];
};
