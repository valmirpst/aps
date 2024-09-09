import { FuncionarioType } from '../@types/FuncionarioType';

class Funcionario {
  cpf: FuncionarioType['cpf'];
  nome: FuncionarioType['nome'];
  telefone: FuncionarioType['telefone'];
  cargo: FuncionarioType['cargo'];
  dataEmissao: FuncionarioType['dataEmissao'];
  salario: FuncionarioType['salario'];
  constructor(
    cpf: FuncionarioType['cpf'],
    nome: FuncionarioType['nome'],
    telefone: FuncionarioType['telefone'],
    cargo: FuncionarioType['cargo'],
    dataEmissao: FuncionarioType['dataEmissao'],
    salario: FuncionarioType['salario']
  ) {
    this.cpf = cpf;
    this.nome = nome;
    this.telefone = telefone;
    this.cargo = cargo;
    this.dataEmissao = dataEmissao;
    this.salario = salario;
  }
}
