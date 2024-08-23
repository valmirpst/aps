class Estoque {
  teste45: string;
}

export class CombosAcai {
  nome: string;
  preco: number;
  tamanhoMl: number;
  itens: Estoque[];
  constructor(nome: string, preco: number, tamanhoMl: number) {
    this.nome = nome;
    this.preco = preco;
    this.tamanhoMl = tamanhoMl;
  }
}
