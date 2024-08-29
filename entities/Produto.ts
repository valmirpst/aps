export type ProdutoType = {
  tamanho: string;
  sabor: string;
  validade: Date;
};

class Produto {
  tamanho: ProdutoType['tamanho'];
  sabor: ProdutoType['sabor'];
  validade: ProdutoType['validade'];
  constructor(tamanho: ProdutoType['tamanho'], sabor: string, validade: Date) {
    this.tamanho = tamanho;
    this.sabor = sabor;
    this.validade = validade;
  }
}
