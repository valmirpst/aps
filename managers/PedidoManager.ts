import { PedidoType } from '../@types/PedidoType';
import { PedidoDao, ReturnPedidoType } from '../daos/PedidoDao';

export class PedidoManager {
  pedidoDao: PedidoDao;

  constructor() {
    this.pedidoDao = new PedidoDao();
  }

  confirmarPedido(pedido: PedidoType): ReturnPedidoType {
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
