import { ComboAcaiDao } from '../daos/ComboAcaiDao';
import { ProdutoEstoqueDao } from '../daos/ProdutoEstoqueDao';

class estoqueManager {
  comboAcaiDao: ComboAcaiDao;
  produtoEstoqueDao: ProdutoEstoqueDao;
  constructor() {
    this.comboAcaiDao = new ComboAcaiDao();
    this.produtoEstoqueDao = new ProdutoEstoqueDao();
  }

  consultarCardapio() {
    const combosAcai = this.comboAcaiDao.retrieveAll();
    return combosAcai;
  }

  // buscarCategorias() {}

  buscarItens() {
    const produtos = this.produtoEstoqueDao.retrieveAll();
    
  }

  buscarAcaiPorId(id: string) {
    const comboAcai = this.comboAcaiDao.retrieve(id);
    return comboAcai;
  }
}
