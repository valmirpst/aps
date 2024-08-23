export type ProdutoEstoqueType = {
  id: number;
  categoria: Categoria;
  nome: string;
  quantidade: number;
};

class Categoria {
  comestivel: boolean;

  constructor(comestivel: boolean) {
    this.comestivel = comestivel;
  }
}

export default class ProdutoEstoque {
  id: ProdutoEstoqueType['id'];
  categoria: ProdutoEstoqueType['categoria']; // Acai
  nome: ProdutoEstoqueType['nome']; // Balde Acai 12kg
  quantidade: ProdutoEstoqueType['quantidade']; // 5

  constructor(
    id: ProdutoEstoqueType['id'],
    categoria: ProdutoEstoqueType['categoria'],
    nome: ProdutoEstoqueType['nome'],
    quantidade: ProdutoEstoqueType['quantidade']
  ) {
    this.id = id;
    this.categoria = categoria;
    this.nome = nome;
    this.quantidade = quantidade;
  }
}
