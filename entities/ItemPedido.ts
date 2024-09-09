import { ItemPedidoType } from '../@types/ItemPedido';

export class ItemPedido {
  id: ItemPedidoType['id'];
  quantidade: ItemPedidoType['quantidade'];
  comboAcaiId: ItemPedidoType['comboAcaiId'];
  constructor(
    id: ItemPedidoType['id'],
    quantidade: ItemPedidoType['quantidade'],
    comboAcaiId: ItemPedidoType['comboAcaiId']
  ) {
    this.id = id;
    this.quantidade = quantidade;
    this.comboAcaiId = comboAcaiId;
  }
}
