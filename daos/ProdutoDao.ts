import { ReturnDataType } from '../@types/globalType';
import { ProdutoType } from '../@types/ProdutoType';
import { produtosList } from '../mock';

type ReturnProdutoType = ReturnDataType<ProdutoType>;
class ProdutoDao {
  create(produto: ProdutoType): ReturnProdutoType {
    // Fazer validação se o produto é válido
    produtosList.push(...produtosList);
    return {
      ok: true,
      error: null,
      data: produto,
    };
  }

  update(id: string, produto: ProdutoType): ReturnProdutoType {
    const produtoIndex = produtosList.findIndex((item) => (item.id = id));
    if (produtoIndex !== -1) {
      produtosList[produtoIndex] = produto;
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

  retrieve(id: string): ReturnProdutoType {
    const produtoIndex = produtosList.findIndex((item) => (item.id = id));
    if (produtoIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: produtosList[produtoIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  delete(id: string): ReturnProdutoType {
    const produtoIndex = produtosList.findIndex((item) => (item.id = id));
    if (produtoIndex !== -1) {
      const produtoRemoved = produtosList.splice(produtoIndex, 1)[0];
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
