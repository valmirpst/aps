import { AcaiEstoqueType } from './@types/AcaiEstoqueType';
import { AdicionaisEstoqueType } from './@types/AdicionaisEstoqueType';
import { AvaliacaoType } from './@types/AvaliacaoType';
import { ClienteType } from './@types/ClienteType';
import { ComboAcaiType } from './@types/ComboAcaiType';
import { EnderecoType } from './@types/EnderecoType';
import { FuncionarioType } from './@types/FuncionarioType';
import { ItemPedidoType } from './@types/ItemPedido';
import { PedidoType } from './@types/PedidoType';

export const acaiEstoqueList: AcaiEstoqueType[] = [
  {
    id: '1',
    nome: 'Açaí Tradicional',
    tamanho: '1L',
    sabor: 'Açaí',
    validade: new Date(2024, 11, 1), // 1 de Dezembro de 2024
    quantidade: 20,
  },
  {
    id: '2',
    nome: 'Açaí com Banana',
    tamanho: '500ml',
    sabor: 'Açaí e Banana',
    validade: new Date(2024, 9, 15), // 15 de Outubro de 2024
    quantidade: 15,
  },
  {
    id: '3',
    nome: 'Açaí com Morango',
    tamanho: '750ml',
    sabor: 'Açaí e Morango',
    validade: new Date(2024, 8, 25), // 25 de Setembro de 2024
    quantidade: 30,
  },
];

export const adicionaisEstoqueList: AdicionaisEstoqueType[] = [
  {
    id: '1',
    nome: 'Granola',
    descricao: 'Granola crocante com mel',
    quantidade: 25,
    validade: new Date(2024, 11, 1), // 1 de Dezembro de 2024
  },
  {
    id: '2',
    nome: 'Paçoca',
    descricao: 'Paçoca triturada para acompanhamento',
    quantidade: 40,
    validade: new Date(2024, 9, 15), // 15 de Outubro de 2024
  },
  {
    id: '3',
    nome: 'Leite Condensado',
    descricao: 'Leite condensado em sachê',
    quantidade: 100,
    validade: new Date(2025, 0, 30), // 30 de Janeiro de 2025
  },
  {
    id: '4',
    nome: 'Coco Ralado',
    descricao: 'Coco ralado fresco',
    quantidade: 35,
    validade: new Date(2024, 10, 20), // 20 de Novembro de 2024
  },
  {
    id: '5',
    nome: 'Mel',
    descricao: 'Mel natural',
    quantidade: 50,
    validade: new Date(2024, 7, 10), // 10 de Agosto de 2024
  },
];

export const avaliacaoList: AvaliacaoType[] = [
  {
    id: '1',
    estrelas: 5,
    comentario:
      'O açaí estava delicioso, e a entrega foi super rápida. Adorei!',
  },
  {
    id: '2',
    estrelas: 4,
    comentario: 'Muito bom! Só achei que poderia ter um pouco mais de granola.',
  },
  {
    id: '3',
    estrelas: 3,
    comentario:
      'O açaí estava bom, mas chegou um pouco derretido. Precisa melhorar a embalagem.',
  },
  {
    id: '4',
    estrelas: 5,
    comentario: 'Melhor açaí que já comi, tudo perfeito!',
  },
];

export const enderecoList: EnderecoType[] = [
  {
    id: '1',
    cidade: 'Rio de Janeiro',
    bairro: 'Copacabana',
    rua: 'Avenida Atlântica',
    numero: '456',
  },
  {
    id: '2',
    cidade: 'São Paulo',
    bairro: 'Vila Madalena',
    rua: 'Rua dos Artistas',
    numero: '789',
  },
  {
    id: '3',
    cidade: 'Curitiba',
    bairro: 'Centro',
    rua: 'Avenida Brasil',
    numero: '1234',
  },
  {
    id: '4',
    cidade: 'Belo Horizonte',
    bairro: 'Savassi',
    rua: 'Rua Pernambuco',
    numero: '321',
  },
];

export const clienteList: ClienteType[] = [
  {
    cpf: '123.456.789-00',
    nome: 'Ana Souza',
    telefone: '(11) 91234-5678',
    cidade: 'Rio de Janeiro',
    endereco: '1',
  },
  {
    cpf: '987.654.321-11',
    nome: 'Carlos Pereira',
    telefone: '(21) 99876-5432',
    cidade: 'São Paulo',
    endereco: '2',
  },
  {
    cpf: '111.222.333-44',
    nome: 'Mariana Lima',
    telefone: '(31) 98765-4321',
    cidade: 'Curitiba',
    endereco: '3',
  },
  {
    cpf: '555.666.777-88',
    nome: 'João Silva',
    telefone: '(41) 91234-4321',
    cidade: 'Belo Horizonte',
    endereco: '4',
  },
];

export const comboAcaiList: ComboAcaiType[] = [
  {
    id: '1',
    nome: 'Combo Família',
    preco: 45.0,
    tamanhoMl: 1500,
    adicionais: ['1', '2', '3'],
    acaiId: '1',
  },
  {
    id: '2',
    nome: 'Combo Duplo',
    preco: 30.0,
    tamanhoMl: 1000,
    adicionais: ['1', '4'],
    acaiId: '2',
  },
  {
    id: '3',
    nome: 'Combo Individual',
    preco: 20.0,
    tamanhoMl: 500,
    adicionais: ['2', '5'],
    acaiId: '3',
  },
  {
    id: '4',
    nome: 'Combo Tropical',
    preco: 35.0,
    tamanhoMl: 1200,
    adicionais: ['4', '5'],
    acaiId: '1',
  },
  {
    id: '5',
    nome: 'Combo Fitness',
    preco: 28.0,
    tamanhoMl: 800,
    adicionais: ['1', '5'],
    acaiId: '3',
  },
];

export const funcionarioList: FuncionarioType[] = [
  {
    cpf: '123.456.789-00',
    nome: 'Ana Souza',
    telefone: '(11) 91234-5678',
    cargo: 'Atendente',
    dataEmissao: new Date(2022, 5, 10), // 10 de Junho de 2022
    salario: 2500.0,
  },
  {
    cpf: '987.654.321-11',
    nome: 'Carlos Pereira',
    telefone: '(21) 99876-5432',
    cargo: 'Gerente',
    dataEmissao: new Date(2021, 2, 15), // 15 de Março de 2021
    salario: 4000.0,
  },
  {
    cpf: '111.222.333-44',
    nome: 'Mariana Lima',
    telefone: '(31) 98765-4321',
    cargo: 'Entregador',
    dataEmissao: new Date(2023, 8, 5), // 5 de Setembro de 2023
    salario: 1800.0,
  },
];

export const itemPedidoList: ItemPedidoType[] = [
  {
    id: '1',
    quantidade: 2,
    comboAcaiId: '1',
  },
  {
    id: '2',
    quantidade: 1,
    comboAcaiId: '3',
  },
  {
    id: '3',
    quantidade: 3,
    comboAcaiId: '2',
  },
  {
    id: '4',
    quantidade: 1,
    comboAcaiId: '4',
  },
  {
    id: '5',
    quantidade: 4,
    comboAcaiId: '5',
  },
];

export const pedidoList: PedidoType[] = [
  {
    id: '1',
    dataEmissao: new Date(2024, 7, 10), // 10 de Agosto de 2024
    formaPagamento: 'Cartão de Crédito',
    status: 'Em preparo',
    cpfCliente: '123.456.789-00',
    itensPedido: ['1', '2'],
    avaliacoes: ['1'],
    cpfFuncionarioResposavel: '987.654.321-11',
  },
  {
    id: '2',
    dataEmissao: new Date(2024, 7, 11), // 11 de Agosto de 2024
    formaPagamento: 'Dinheiro',
    status: 'A caminho',
    cpfCliente: '987.654.321-11',
    itensPedido: ['3'],
    avaliacoes: ['2'],
    cpfFuncionarioResposavel: '111.222.333-44',
  },
  {
    id: '3',
    dataEmissao: new Date(2024, 7, 12), // 12 de Agosto de 2024
    formaPagamento: 'Pix',
    status: 'Entregue',
    cpfCliente: '111.222.333-44',
    itensPedido: ['4', '5'],
    avaliacoes: ['3', '4'],
    cpfFuncionarioResposavel: '123.456.789-00',
  },
];
