import { ReturnDataType } from '../@types/GlobalType';
import { ItemPedidoType } from '../@types/ItemPedido';
import { ItemPedidoSchema } from '../dvos/ItemPedidoDvo';
import { itemPedidoList } from '../mock';

export type ReturnItemPedidoType = ReturnDataType<ItemPedidoType>;
export class ItemPedidoDao {
  create(itemPedido: ItemPedidoType): ReturnItemPedidoType {
    const validation = ItemPedidoSchema.safeParse(itemPedido);

    if (!validation.success) {
      return {
        ok: false,
        error: validation.error.toString(),
        data: null,
      };
    }

    itemPedidoList.push(...itemPedidoList);
    return {
      ok: true,
      error: null,
      data: itemPedido,
    };
  }

  update(id: string, itemPedido: ItemPedidoType): ReturnItemPedidoType {
    const pedidoIndex = itemPedidoList.findIndex((item) => (item.id = id));
    if (pedidoIndex !== -1) {
      itemPedidoList[pedidoIndex] = itemPedido;
      return {
        ok: true,
        error: null,
        data: itemPedido,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  retrieve(id: string): ReturnItemPedidoType {
    const itemPedidoIndex = itemPedidoList.findIndex((item) => (item.id = id));
    if (itemPedidoIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: itemPedidoList[itemPedidoIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  delete(id: string): ReturnItemPedidoType {
    const ItemPedidoIndex = itemPedidoList.findIndex((item) => (item.id = id));
    if (ItemPedidoIndex !== -1) {
      const ItemPedidoRemoved = itemPedidoList.splice(ItemPedidoIndex, 1)[0];
      return {
        ok: true,
        error: null,
        data: ItemPedidoRemoved,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }
}
