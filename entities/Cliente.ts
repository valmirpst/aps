import { ClienteType } from '../@types/ClienteType';

export class Cliente {
  cpf: ClienteType['cpf'];
  nome: ClienteType['nome'];
  telefone: ClienteType['telefone'];
  endereco: ClienteType['endereco'];
  constructor(
    cpf: ClienteType['cpf'],
    nome: ClienteType['nome'],
    telefone: ClienteType['telefone'],
    endereco: ClienteType['endereco']
  ) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}
