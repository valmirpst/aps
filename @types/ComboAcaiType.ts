import { AcaiEstoqueType } from './AcaiEstoqueType';

export type ComboAcaiType = {
  id: string;
  nome: string;
  preco: number;
  tamanhoMl: number;
  adicionais: AdicionaisEstoqueType[];
  acaiId: AcaiEstoqueType['id'];
};
