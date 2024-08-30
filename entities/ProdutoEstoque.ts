import { ProdutoEstoqueType } from '../@types/ProdutoEstoqueType';

class Categoria {
  comestivel: boolean;

  constructor(comestivel: boolean) {
    this.comestivel = comestivel;
  }
}

export default class ProdutoEstoque {
  id: ProdutoEstoqueType['id'];
  nome: ProdutoEstoqueType['nome']; // Balde Acai 12kg
  tamanho: ProdutoEstoqueType['tamanho']; // Acai
  quantidade: ProdutoEstoqueType['quantidade']; // 5

  constructor(
    id: ProdutoEstoqueType['id'],
    nome: ProdutoEstoqueType['nome'],
    tamanho: ProdutoEstoqueType['tamanho'],
    quantidade: ProdutoEstoqueType['quantidade']
  ) {
    this.id = id;
    this.nome = nome;
    this.tamanho = tamanho;
    this.quantidade = quantidade;
  }
}
