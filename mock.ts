import { ClienteType } from './@types/ClienteType';
import { ComboAcaiType } from './@types/ComboAcaiType';
import { EntregaType } from './@types/EntregaType';
import { ItemPedidoType } from './@types/ItemPedido';
import { PedidoType } from './@types/PedidoType';
import { ProdutoEstoqueType } from './@types/AcaiEstoqueType';
import { AvaliacaoType } from './@types/AvaliacaoType';
import { FuncionarioType } from './@types/FuncionarioType';
import { EnderecoType } from './@types/EnderecoType';

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

export const itemPedidoList: ItemPedidoType[] = [
  {
    id: '1',
    quantidade: 2,
    descricao: 'Combo Família - Açaí com Granola, Leite Condensado e Paçoca',
    valor: 90.0, // 2 x 45.0
  },
  {
    id: '2',
    quantidade: 1,
    descricao: 'Combo Individual - Açaí com Banana e Mel',
    valor: 20.0,
  },
  {
    id: '3',
    quantidade: 3,
    descricao: 'Combo Duplo - Açaí com Morango e Castanha',
    valor: 90.0, // 3 x 30.0
  },
  {
    id: '4',
    quantidade: 1,
    descricao: 'Combo Tropical - Açaí com Kiwi, Abacaxi e Coco ralado',
    valor: 35.0,
  },
  {
    id: '5',
    quantidade: 4,
    descricao: 'Combo Fitness - Açaí com Aveia, Chia e Mel',
    valor: 112.0, // 4 x 28.0
  },
];

export const entregaList: EntregaType[] = [
  {
    id: '1',
    cpfEntregador: '123.456.789-00',
    combosAcai: [
      {
        id: '1',
        nome: 'Combo Família',
        preco: 45.0,
        tamanhoMl: 1500,
        adicionais: ['Granola', 'Leite condensado', 'Paçoca'],
      },
    ],
    endereco: 'Rua das Mangueiras, 321, Jardim Botânico, Rio de Janeiro, RJ',
    status: 'Em preparo',
  },
  {
    id: '2',
    cpfEntregador: '987.654.321-11',
    combosAcai: [
      {
        id: '3',
        nome: 'Combo Individual',
        preco: 20.0,
        tamanhoMl: 500,
        adicionais: ['Banana', 'Mel'],
      },
    ],
    endereco: 'Avenida Atlântica, 456, Copacabana, Rio de Janeiro, RJ',
    status: 'Saindo para entrega',
  },
  {
    id: '3',
    cpfEntregador: '111.222.333-44',
    combosAcai: [
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
        adicionais: ['Granola', 'Leite condensado'],
      },
    ],
    endereco: 'Rua dos Artistas, 789, Vila Madalena, São Paulo, SP',
    status: 'entregue',
  },
  {
    id: '4',
    cpfEntregador: '555.666.777-88',
    combosAcai: [
      {
        id: '1',
        nome: 'Combo Família',
        preco: 45.0,
        tamanhoMl: 1500,
        adicionais: ['Granola', 'Morango', 'Mel'],
      },
      {
        id: '2',
        nome: 'Combo Duplo',
        preco: 30.0,
        tamanhoMl: 1000,
        adicionais: ['Paçoca', 'Castanha'],
      },
    ],
    endereco: 'Avenida Brasil, 1234, Centro, Curitiba, PR',
    status: 'Saindo para entrega',
  },
  {
    id: '5',
    cpfEntregador: '777.888.999-00',
    combosAcai: [
      {
        id: '4',
        nome: 'Combo Tropical',
        preco: 35.0,
        tamanhoMl: 1200,
        adicionais: ['Kiwi', 'Abacaxi', 'Coco ralado'],
      },
    ],
    endereco: 'Rua das Palmeiras, 567, Leblon, Rio de Janeiro, RJ',
    status: 'entregue',
  },
  {
    id: '6',
    cpfEntregador: '999.888.777-11',
    combosAcai: [
      {
        id: '5',
        nome: 'Combo Fitness',
        preco: 28.0,
        tamanhoMl: 800,
        adicionais: ['Aveia', 'Chia', 'Mel'],
      },
    ],
    endereco: 'Avenida Paulista, 123, Bela Vista, São Paulo, SP',
    status: 'Em preparo',
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
];
