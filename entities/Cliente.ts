import { ClienteType } from '../@types/ClienteType';

export class Cliente {
  cpf: ClienteType['cpf'];
  nome: ClienteType['nome'];
  telefone: ClienteType['telefone'];
  cidade: ClienteType['cidade'];
  endereco: ClienteType['endereco'];
  constructor(
    cpf: ClienteType['cpf'],
    nome: ClienteType['nome'],
    telefone: ClienteType['telefone'],
    cidade: ClienteType['cidade'],
    endereco: ClienteType['endereco']
  ) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
    this.cidade = cidade;
    this.endereco = endereco;
  }
}
