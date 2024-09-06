import { EntregaType } from '../@types/EntregaType';

class Entrega {
  cpfEntregador: EntregaType['cpfEntregador'];
  combosAcai: EntregaType['combosAcai'];
  endereco: EntregaType['endereco'];
  status: EntregaType['status'];
  constructor(
    cpfEntregador: EntregaType['cpfEntregador'],
    combosAcai: EntregaType['combosAcai'],
    endereco: EntregaType['endereco'],
    status: EntregaType['status']
  ) {
    this.cpfEntregador = cpfEntregador;
    this.combosAcai = combosAcai;
    this.endereco = endereco;
    this.status = status;
  }
}
