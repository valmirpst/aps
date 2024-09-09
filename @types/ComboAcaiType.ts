import { AcaiEstoqueType } from './AcaiEstoqueType';
import { AdicionaisEstoqueType } from './AdicionaisEstoqueType';

export type ComboAcaiType = {
  id: string;
  nome: string;
  preco: number;
  tamanhoMl: number;
  adicionais: AdicionaisEstoqueType['id'][];
  acaiId: AcaiEstoqueType['id'];
};
