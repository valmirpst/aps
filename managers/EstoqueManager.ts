import { ComboAcaiDao } from '../daos/ComboAcaiDao';

class estoqueManager {
  comboAcaiDao: ComboAcaiDao;

  constructor() {
    this.comboAcaiDao = new ComboAcaiDao();
  }

  consultarCardapio() {
    const combosAcai = this.comboAcaiDao.retrieveAll();
    return combosAcai;
  }

  // buscarCategorias() {}

  buscarItens(categoria: string) {}

  buscarAcaiPorId(id: string) {
    const comboAcai = this.comboAcaiDao.retrieve(id);
    return comboAcai;
  }
}
