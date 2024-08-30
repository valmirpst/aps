import { ComboAcaiType } from '../@types/ComboAcaiType';

export class ComboAcai {
  nome: ComboAcaiType['nome'];
  preco: ComboAcaiType['preco'];
  tamanhoMl: ComboAcaiType['tamanhoMl'];
  adicionais: ComboAcaiType['adicionais'];
  constructor(
    nome: ComboAcaiType['nome'],
    preco: ComboAcaiType['preco'],
    tamanhoMl: ComboAcaiType['tamanhoMl'],
    adicionais: ComboAcaiType['adicionais']
  ) {
    this.nome = nome;
    this.preco = preco;
    this.tamanhoMl = tamanhoMl;
    this.adicionais = adicionais;
  }
}
