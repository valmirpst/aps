import { EntregaDao } from '../daos/EntregaDao';

class EntregaManager {
  entregaDao: EntregaDao;

  constructor() {
    this.entregaDao = new EntregaDao();
  }

  iniciarEntrega(entregaId: string) {
    const entrega = this.entregaDao.retrieve(entregaId);
    if (entrega.data) {
      this.entregaDao.update(entregaId, {
        ...entrega.data,
        status: 'Em preparo',
      });
    }
  }

  finalizarEntrega(pedidoId: string) {
    const entrega = this.entregaDao.retrieve(pedidoId);
    if (entrega.data) {
      this.entregaDao.update(pedidoId, {
        ...entrega.data,
        status: 'entregue',
      });
    }
  }
}
