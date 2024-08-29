import { ComboAcaiType } from './@types/ComboAcaiType';
import { PedidoType } from './@types/PedidoType';
import { ProdutoEstoqueType } from './@types/ProdutoEstoque';
import { ProdutoType } from './@types/ProdutoType';

export const produtosList: ProdutoType[] = [
  {
    tamanho: '500ml',
    sabor: 'Açaí com Banana',
    validade: new Date(2024, 10, 5), // 5 de Novembro de 2024
  },
  {
    tamanho: '300ml',
    sabor: 'Açaí com Morango',
    validade: new Date(2024, 8, 20), // 20 de Setembro de 2024
  },
  {
    tamanho: '700ml',
    sabor: 'Açaí com Granola',
    validade: new Date(2024, 11, 15), // 15 de Dezembro de 2024
  },
];

export const comboAcaiList: ComboAcaiType[] = [
  {
    nome: 'Combo Família',
    preco: 45.0,
    tamanhoMl: 1500,
    adicionais: ['Granola', 'Leite condensado', 'Paçoca'],
  },
  {
    nome: 'Combo Duplo',
    preco: 30.0,
    tamanhoMl: 1000,
    adicionais: ['Morango', 'Castanha'],
  },
  {
    nome: 'Combo Individual',
    preco: 20.0,
    tamanhoMl: 500,
    adicionais: ['Banana', 'Mel'],
  },
];

export const pedidoList: PedidoType[] = [
  {
    dataEmissao: new Date(2024, 7, 29), // 29 de Agosto de 2024
    endereco: 'Rua dos Açaizeiros, 123, Centro, São Paulo, SP',
    formaPagamento: 'Cartão de Crédito',
    combosAcai: [comboAcaiList[0]],
    extras: ['Mel', 'Granola'],
  },
  {
    dataEmissao: new Date(2024, 7, 28), // 28 de Agosto de 2024
    endereco: 'Avenida Paulista, 987, Bela Vista, São Paulo, SP',
    formaPagamento: 'Pix',
    combosAcai: [comboAcaiList[2]],
    extras: ['Paçoca'],
  },
];

export const ProdutoEstoqueList: ProdutoEstoqueType[] = [
  {
    id: 1,
    nome: 'Açaí Original',
    quantidade: 50,
  },
  {
    id: 2,
    nome: 'Granola',
    quantidade: 30,
  },
  {
    id: 3,
    nome: 'Leite Condensado',
    quantidade: 20,
  },
];
