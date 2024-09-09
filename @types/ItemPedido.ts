import { ComboAcaiType } from './ComboAcaiType';

export type ItemPedidoType = {
  id: string;
  quantidade: number;
  comboAcaiId: ComboAcaiType['id'];
};
