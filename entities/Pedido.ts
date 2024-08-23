import { ComboAcai } from "./ComboAcai";

class Pedido {
  data: Date;
  endereco: string;
  formaPagamento: string;
  combos: ComboAcai[];
  extras: string[];
  constructor(
    data: Date,
    endereco: string,
    formaPagamento: string,
    combos: ComboAcai[],
    extras: string[]
  ) {
    this.data = data;
    this.endereco = endereco;
    this.formaPagamento = formaPagamento;
    this.combos = combos;
    this.extras = extras;
  }
}
