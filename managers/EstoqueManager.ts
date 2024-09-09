import { ComboAcaiDao } from '../daos/ComboAcaiDao';
import { AcaiEstoqueDao } from '../daos/AcaiEstoqueDao';
import { AdicionaisEstoqueDao } from '../daos/AdicionaisEstoqueDao';

export class estoqueManager {
  comboAcaiDao: ComboAcaiDao;
  acaiEstoqueDao: AcaiEstoqueDao;
  adicionaisEstoqueDao: AdicionaisEstoqueDao;
  constructor() {
    this.comboAcaiDao = new ComboAcaiDao();
    this.acaiEstoqueDao = new AcaiEstoqueDao();
    this.adicionaisEstoqueDao = new AdicionaisEstoqueDao();
  }

  // Busca os combosAcai do estoque
  consultarCardapio() {
    const combosAcai = this.comboAcaiDao.retrieveAll();
    return combosAcai;
  }

  // Busca todos os acais em estoque
  buscarAcais() {
    const produtos = this.acaiEstoqueDao.retrieveAll();
    return produtos;
  }

  // Busca todos os adicionais em estoque
  buscarAdicionais() {
    const adicionais = this.adicionaisEstoqueDao.retrieveAll();
    return adicionais;
  }

  // buscarAcaiPorId(id: string) {
  //   const comboAcai = this.comboAcaiDao.retrieve(id);
  //   return comboAcai;
  // }

  // adicionarProduto(produto: AcaiEstoqueType) {
  //   const validation = ProdutoEstoqueSchema.safeParse(produto);

  //   if (!validation.success) {
  //     return {
  //       ok: false,
  //       error: validation.error.toString(),
  //       data: null,
  //     };
  //   }

  //   return this.produtoEstoque.create(produto);
  // }

  // criarComboAcai(combo: ComboAcaiType) {
  //   const validation = ComboAcaiSchema.safeParse(combo);

  //   if (!validation.success) {
  //     return {
  //       ok: false,
  //       error: validation.error.toString(),
  //       data: null,
  //     };
  //   }

  //   return this.comboAcaiDao.create(combo);
  // }
}
