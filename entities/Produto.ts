import { ProdutoType } from '../@types/PedutoType';

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
