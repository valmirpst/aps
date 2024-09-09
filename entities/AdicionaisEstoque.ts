import { AdicionaisEstoqueType } from '../@types/AdicionaisEstoqueType';

export class AdicionaisEstoque {
  id: AdicionaisEstoqueType['id'];
  nome: AdicionaisEstoqueType['nome'];
  descricao: AdicionaisEstoqueType['descricao'];
  quantidade: AdicionaisEstoqueType['quantidade'];
  validade: AdicionaisEstoqueType['validade'];
  constructor(
    id: AdicionaisEstoqueType['id'],
    nome: AdicionaisEstoqueType['nome'],
    descricao: AdicionaisEstoqueType['descricao'],
    quantidade: AdicionaisEstoqueType['quantidade'],
    validade: AdicionaisEstoqueType['validade']
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.validade = validade;
  }
}
