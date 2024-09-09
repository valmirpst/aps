import { ComboAcaiType } from '../@types/ComboAcaiType';

export class ComboAcai {
  id: ComboAcaiType['id'];
  nome: ComboAcaiType['nome'];
  preco: ComboAcaiType['preco'];
  tamanhoMl: ComboAcaiType['tamanhoMl'];
  adicionais: ComboAcaiType['adicionais'];
  AcaiId: ComboAcaiType['acaiId'];
  constructor(
    id: ComboAcaiType['id'],
    nome: ComboAcaiType['nome'],
    preco: ComboAcaiType['preco'],
    tamanhoMl: ComboAcaiType['tamanhoMl'],
    adicionais: ComboAcaiType['adicionais']
  ) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.tamanhoMl = tamanhoMl;
    this.adicionais = adicionais;
  }
}
