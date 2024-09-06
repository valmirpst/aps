import { EntregaType } from '../@types/EntregaType';
import { EntregaDao } from '../daos/EntregaDao';
import { EntregaSchema } from '../dvos/EntregaDvo';

class EntregaManager {
  entregaDao: EntregaDao;

  constructor() {
    this.entregaDao = new EntregaDao();
  }

  iniciarEntrega(entrega: EntregaType) {
    const validation = EntregaSchema.safeParse(entrega);

    if (!validation.success) {
      return {
        ok: false,
        error: validation.error.toString(),
        data: null,
      };
    }

    return this.entregaDao.create(entrega);
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
