import { EnderecoType } from './EnderecoType';

export type ClienteType = {
  cpf: string;
  nome: string;
  telefone: string;
  cidade: string;
  endereco: EnderecoType['id'];
};
