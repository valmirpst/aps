import { ComboAcaiType } from './ComboAcaiType';

export type PedidoType = {
  dataEmissao: Date;
  endereco: string;
  formaPagamento: string;
  combosAcai: ComboAcaiType[];
  extras: string[];
};
