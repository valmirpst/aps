import { AvaliacaoType } from '../@types/AvaliacaoType';
import { ReturnDataType } from '../@types/GlobalType';
import { PedidoType } from '../@types/PedidoType';
import { AvaliacaoDao } from '../daos/AvaliacaoDao';
import { PedidoDao, ReturnPedidoType } from '../daos/PedidoDao';
import { PedidoSchema } from '../dvos/PedidoDvo';

export class PedidoManager {
  pedidoDao: PedidoDao;
  avaliacaoDao: AvaliacaoDao;

  constructor() {
    this.pedidoDao = new PedidoDao();
    this.avaliacaoDao = new AvaliacaoDao();
  }

  // Cria o pedido
  confirmarPedido(pedido: PedidoType): ReturnPedidoType {
    const validation = PedidoSchema.safeParse(pedido);

    if (!validation.success) {
      return {
        ok: false,
        error: validation.error.toString(),
        data: null,
      };
    }

    return this.pedidoDao.create(pedido);
  }

  // Busca todos os pedidos
  buscarPedidos(): ReturnDataType<PedidoType[]> {
    const pedidos = this.pedidoDao.retrieveAll();
    return pedidos;
  }

  // Cancela o pedido do ID passado
  cancelarPedido(pedidoId: string) {
    const pedido = this.pedidoDao.retrieve(pedidoId);
    if (pedido.data) {
      this.pedidoDao.update(pedidoId, {
        ...pedido.data,
        status: 'Cancelado',
      });
    }
    return pedido;
  }

  // Avalia o pedido
  avaliarPedido(pedidoId: string, avaliacao: AvaliacaoType): ReturnPedidoType {
    const pedidoAvaliado = this.pedidoDao.retrieve(pedidoId);
    const { data: novaAvaliacao } = this.avaliacaoDao.create(avaliacao);
    if (pedidoAvaliado.data && novaAvaliacao) {
      pedidoAvaliado.data.avaliacoes.push(novaAvaliacao.id);
      return this.pedidoDao.update(pedidoId, pedidoAvaliado.data);
    }

    return pedidoAvaliado;
  }

  iniciarEntrega(pedidoId: string) {
    const entrega = this.pedidoDao.retrieve(pedidoId);
    if (entrega.data) {
      this.pedidoDao.update(pedidoId, {
        ...entrega.data,
        status: 'Em preparo',
      });
    }
  }

  finalizarEntrega(pedidoId: string) {
    const entrega = this.pedidoDao.retrieve(pedidoId);
    if (entrega.data) {
      this.pedidoDao.update(pedidoId, {
        ...entrega.data,
        status: 'Entregue',
      });
    }
  }
}
