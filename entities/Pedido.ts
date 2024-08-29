import { PedidoType } from '../@types/PeditoType';

class Pedido {
  dataEmissao: PedidoType['dataEmissao'];
  endereco: PedidoType['endereco'];
  formaPagamento: PedidoType['formaPagamento'];
  combos: PedidoType['combosAcai'];
  extras: PedidoType['extras'];
  constructor(
    dataEmissao: PedidoType['dataEmissao'],
    endereco: PedidoType['endereco'],
    formaPagamento: PedidoType['formaPagamento'],
    combos: PedidoType['combosAcai'],
    extras: PedidoType['extras']
  ) {
    this.dataEmissao = dataEmissao;
    this.endereco = endereco;
    this.formaPagamento = formaPagamento;
    this.combos = combos;
    this.extras = extras;
  }
}
