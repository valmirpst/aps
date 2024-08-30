import { ComboAcaiType } from './ComboAcaiType';

export type EntregaType = {
  cpfEntregador: string;
  combosAcai: ComboAcaiType[];
  endereco: string;
  status: 'Em preparo' | 'Saindo para entrega' | 'entregue';
};
