import { ComboAcaiType } from '../@types/ComboAcaiType';

export class ComboAcai {
  nome: ComboAcaiType['nome'];
  preco: ComboAcaiType['preco'];
  tamanhoMl: ComboAcaiType['tamanhoMl'];
  itens: ComboAcaiType['itens'];
  constructor(
    nome: ComboAcaiType['nome'],
    preco: ComboAcaiType['preco'],
    tamanhoMl: ComboAcaiType['tamanhoMl'],
    itens: ComboAcaiType['itens']
  ) {
    this.nome = nome;
    this.preco = preco;
    this.tamanhoMl = tamanhoMl;
    this.itens = itens;
  }
}
