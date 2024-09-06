import { ReturnDataType } from '../@types/GlobalType';
import { ProdutoEstoqueType } from '../@types/ProdutoEstoqueType';
import { produtosEstoqueList } from '../mock';

type ReturnProdutoEstoqueType = ReturnDataType<ProdutoEstoqueType>;
export class ProdutoEstoqueDao {
  create(produto: ProdutoEstoqueType): ReturnProdutoEstoqueType {
    produtosEstoqueList.push(...produtosEstoqueList);
    return {
      ok: true,
      error: null,
      data: produto,
    };
  }

  update(id: string, produto: ProdutoEstoqueType): ReturnProdutoEstoqueType {
    const produtoIndex = produtosEstoqueList.findIndex(
      (item) => (item.id = id)
    );
    if (produtoIndex !== -1) {
      produtosEstoqueList[produtoIndex] = produto;
      return {
        ok: true,
        error: null,
        data: produto,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  retrieve(id: string): ReturnProdutoEstoqueType {
    const produtoIndex = produtosEstoqueList.findIndex(
      (item) => (item.id = id)
    );
    if (produtoIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: produtosEstoqueList[produtoIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  retrieveAll(): ReturnDataType<ProdutoEstoqueType[]> {
    return {
      ok: true,
      error: null,
      data: produtosEstoqueList,
    };
  }

  delete(id: string): ReturnProdutoEstoqueType {
    const produtoIndex = produtosEstoqueList.findIndex(
      (item) => (item.id = id)
    );
    if (produtoIndex !== -1) {
      const produtoRemoved = produtosEstoqueList.splice(produtoIndex, 1)[0];
      return {
        ok: true,
        error: null,
        data: produtoRemoved,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }
}
