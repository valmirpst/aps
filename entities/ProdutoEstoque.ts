import { ProdutoEstoqueType } from '../@types/ProdutoEstoqueType';

export default class ProdutoEstoque {
  id: ProdutoEstoqueType['id'];
  nome: ProdutoEstoqueType['nome']; // Balde Acai 12kg
  tamanho: ProdutoEstoqueType['tamanho']; // Acai
  quantidade: ProdutoEstoqueType['quantidade']; // 5
  validade: ProdutoEstoqueType['validade'];

  constructor(
    id: ProdutoEstoqueType['id'],
    nome: ProdutoEstoqueType['nome'],
    tamanho: ProdutoEstoqueType['tamanho'],
    validade: ProdutoEstoqueType['validade'],
    quantidade: ProdutoEstoqueType['quantidade']
  ) {
    this.id = id;
    this.nome = nome;
    this.tamanho = tamanho;
    this.validade = validade;
    this.quantidade = quantidade;
  }
}
