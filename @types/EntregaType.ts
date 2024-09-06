import { ComboAcaiType } from './ComboAcaiType';

export type EntregaType = {
  id: string;
  cpfEntregador: string;
  combosAcai: ComboAcaiType[];
  endereco: string;
  status: 'Em preparo' | 'Saindo para entrega' | 'entregue';
};
