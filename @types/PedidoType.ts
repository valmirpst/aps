import { ComboAcaiType } from './ComboAcaiType';

export type PedidoType = {
  id: string;
  dataEmissao: Date;
  endereco: string;
  formaPagamento: string;
  combosAcai: ComboAcaiType[];
  extras: string[];
};
