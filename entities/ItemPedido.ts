import { ItemPedidoType } from '../@types/ItemPedido';

export class ItemPedido {
  quantidade: ItemPedidoType['quantidade'];
  descricao: ItemPedidoType['descricao'];
  valor: ItemPedidoType['valor'];
  constructor(
    quantidade: ItemPedidoType['quantidade'],
    descricao: ItemPedidoType['descricao'],
    valor: ItemPedidoType['valor']
  ) {
    this.quantidade = quantidade;
    this.descricao = descricao;
    this.valor = valor;
  }
}
