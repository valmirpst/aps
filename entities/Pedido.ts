import { PedidoType } from '../@types/PedidoType';

export class Pedido {
  dataEmissao: PedidoType['dataEmissao'];
  formaPagamento: PedidoType['formaPagamento'];
  status: PedidoType['status'];
  cpfCliente: PedidoType['cpfCliente'];
  itensPedido: PedidoType['itensPedido'];
  avaliacoes: PedidoType['avaliacoes'];
  cpfFuncionarioResposavel: PedidoType['cpfFuncionarioResposavel'];
  constructor(
    dataEmissao: PedidoType['dataEmissao'],
    formaPagamento: PedidoType['formaPagamento'],
    status: PedidoType['status'],
    cpfCliente: PedidoType['cpfCliente'],
    itensPedido: PedidoType['itensPedido'],
    avaliacoes: PedidoType['avaliacoes'],
    cpfFuncionarioResposavel: PedidoType['cpfFuncionarioResposavel']
  ) {
    this.dataEmissao = dataEmissao;
    this.formaPagamento = formaPagamento;
    this.status = status;
    this.cpfCliente = cpfCliente;
    this.itensPedido = itensPedido;
    this.avaliacoes = avaliacoes;
    this.cpfFuncionarioResposavel = cpfFuncionarioResposavel;
  }
}
