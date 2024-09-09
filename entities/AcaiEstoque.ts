import { AcaiEstoqueType } from '../@types/AcaiEstoqueType';

export default class AcaiEstoque {
  id: AcaiEstoqueType['id'];
  nome: AcaiEstoqueType['nome'];
  tamanho: AcaiEstoqueType['tamanho'];
  sabor: AcaiEstoqueType['sabor'];
  validade: AcaiEstoqueType['validade'];
  quantidade: AcaiEstoqueType['quantidade'];
  constructor(
    id: AcaiEstoqueType['id'],
    nome: AcaiEstoqueType['nome'],
    tamanho: AcaiEstoqueType['tamanho'],
    sabor: AcaiEstoqueType['sabor'],
    validade: AcaiEstoqueType['validade'],
    quantidade: AcaiEstoqueType['quantidade']
  ) {
    this.id = id;
    this.nome = nome;
    this.tamanho = tamanho;
    this.sabor = sabor;
    this.validade = validade;
    this.quantidade = quantidade;
  }
}
