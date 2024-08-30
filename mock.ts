import { ClienteType } from './@types/ClienteType';
import { ComboAcaiType } from './@types/ComboAcaiType';
import { PedidoType } from './@types/PedidoType';
import { ProdutoEstoqueType } from './@types/ProdutoEstoqueType';

export const comboAcaiList: ComboAcaiType[] = [
  {
    id: '1',
    nome: 'Combo Família',
    preco: 45.0,
    tamanhoMl: 1500,
    adicionais: ['Granola', 'Leite condensado', 'Paçoca'],
  },
  {
    id: '2',
    nome: 'Combo Duplo',
    preco: 30.0,
    tamanhoMl: 1000,
    adicionais: ['Morango', 'Castanha'],
  },
  {
    id: '3',
    nome: 'Combo Individual',
    preco: 20.0,
    tamanhoMl: 500,
    adicionais: ['Banana', 'Mel'],
  },
];

export const pedidoList: PedidoType[] = [
  {
    id: '1',
    dataEmissao: new Date(2024, 7, 29), // 29 de Agosto de 2024
    endereco: 'Rua dos Açaizeiros, 123, Centro, São Paulo, SP',
    formaPagamento: 'Cartão de Crédito',
    combosAcai: [comboAcaiList[0]],
    extras: ['Mel', 'Granola'],
    avaliacoes: [''],
  },
  {
    id: '2',
    dataEmissao: new Date(2024, 7, 28), // 28 de Agosto de 2024
    endereco: 'Avenida Paulista, 987, Bela Vista, São Paulo, SP',
    formaPagamento: 'Pix',
    combosAcai: [comboAcaiList[2]],
    extras: ['Paçoca'],
    avaliacoes: [''],
  },
];

export const produtosEstoqueList: ProdutoEstoqueType[] = [
  {
    id: '1',
    nome: 'Açaí Original',
    tamanho: '20l',
    quantidade: 50,
    validade: new Date(2024, 10, 5),
  },
  {
    id: '2',
    nome: 'Granola',
    tamanho: '1kg',
    quantidade: 30,
    validade: new Date(2024, 8, 20),
  },
  {
    id: '3',
    nome: 'Leite Condensado',
    tamanho: '395g',
    quantidade: 20,
    validade: new Date(2024, 11, 15),
  },
  {
    id: '4',
    nome: 'Leite em pó',
    tamanho: '380g',
    quantidade: 32,
    validade: new Date(2024, 12, 25),
  },
];

export const clientesList: ClienteType[] = [
  {
    cpf: '000.000.000-00',
    nome: 'Diego Silva',
    telefone: '4499999-9999',
    cidade: 'Paranavaí',
    endereco: 'Rua das Graças, 1234',
  },
];
