import { ComboAcaiType } from '../@types/ComboAcaiType';
import { ProdutoEstoqueType } from '../@types/ProdutoEstoqueType';
import { ComboAcaiDao } from '../daos/ComboAcaiDao';
import { ProdutoEstoqueDao } from '../daos/ProdutoEstoqueDao';
import { ComboAcaiSchema } from '../dvos/ComboAcaiDvo';
import { ProdutoEstoqueSchema } from '../dvos/ProdutoEstoqueDvo';

class estoqueManager {
  comboAcaiDao: ComboAcaiDao;
  produtoEstoque: ProdutoEstoqueDao;

  constructor() {
    this.comboAcaiDao = new ComboAcaiDao();
    this.produtoEstoque = new ProdutoEstoqueDao();
  }

  adicionarProduto(produto: ProdutoEstoqueType) {
    const validation = ProdutoEstoqueSchema.safeParse(produto);

    if (!validation.success) {
      return {
        ok: false,
        error: validation.error.toString(),
        data: null,
      };
    }

    return this.produtoEstoque.create(produto);
  }

  criarComboAcai(combo: ComboAcaiType) {
    const validation = ComboAcaiSchema.safeParse(combo);

    if (!validation.success) {
      return {
        ok: false,
        error: validation.error.toString(),
        data: null,
      };
    }

    return this.comboAcaiDao.create(combo);
  }

  consultarCardapio() {
    const combosAcai = this.comboAcaiDao.retrieveAll();
    return combosAcai;
  }

  buscarItens(categoria: string) {}

  buscarAcaiPorId(id: string) {
    const comboAcai = this.comboAcaiDao.retrieve(id);
    return comboAcai;
  }
}
