import { ReturnDataType } from '../@types/GlobalType';
import { PedidoType } from '../@types/PedidoType';
import { pedidoList } from '../mock';

export type ReturnPedidoType = ReturnDataType<PedidoType>;
export class PedidoDao {
  create(pedido: PedidoType): ReturnPedidoType {
    pedidoList.push(...pedidoList);
    return {
      ok: true,
      error: null,
      data: pedido,
    };
  }

  update(id: string, pedido: PedidoType): ReturnPedidoType {
    const pedidoIndex = pedidoList.findIndex((item) => (item.id = id));
    if (pedidoIndex !== -1) {
      pedidoList[pedidoIndex] = pedido;
      return {
        ok: true,
        error: null,
        data: pedido,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  retrieve(id: string): ReturnPedidoType {
    const pedidoIndex = pedidoList.findIndex((item) => (item.id = id));
    if (pedidoIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: pedidoList[pedidoIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  delete(id: string): ReturnPedidoType {
    const produtoIndex = pedidoList.findIndex((item) => (item.id = id));
    if (produtoIndex !== -1) {
      const pedidoRemoved = pedidoList.splice(produtoIndex, 1)[0];
      return {
        ok: true,
        error: null,
        data: pedidoRemoved,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }
}
