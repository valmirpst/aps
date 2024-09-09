import { EnderecoType } from '../@types/EnderecoType';

class Endereco {
  id: EnderecoType['id'];
  cidade: EnderecoType['cidade'];
  bairro: EnderecoType['bairro'];
  rua: EnderecoType['rua'];
  numero: EnderecoType['numero'];
  constructor(
    id: EnderecoType['id'],
    cidade: EnderecoType['cidade'],
    bairro: EnderecoType['bairro'],
    rua: EnderecoType['rua'],
    numero: EnderecoType['numero']
  ) {
    this.id = id;
    this.cidade = cidade;
    this.bairro = bairro;
    this.rua = rua;
    this.numero = numero;
  }
}
