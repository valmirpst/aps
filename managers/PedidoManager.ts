import { PedidoType } from '../@types/PedidoType';
import { PedidoDao, ReturnPedidoType } from '../daos/PedidoDao';
import { PedidoSchema } from '../dvos/PedidoDvo';

export class PedidoManager {
  pedidoDao: PedidoDao;

  constructor() {
    this.pedidoDao = new PedidoDao();
  }

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

  cancelarPedido(pedidoId: string): ReturnPedidoType {
    return this.pedidoDao.delete(pedidoId);
  }

  avaliarPedido(pedidoId: string, mensagem: string): ReturnPedidoType {
    const pedidoAvaliado = this.pedidoDao.retrieve(pedidoId);

    if (pedidoAvaliado.data) {
      pedidoAvaliado.data.avaliacoes.push(mensagem);
      return this.pedidoDao.update(pedidoId, pedidoAvaliado.data);
    }

    return pedidoAvaliado;
  }

  buscarPedidos(usuarioId: string): ReturnPedidoType {
    return this.pedidoDao.retrieve(usuarioId);
  }
}
