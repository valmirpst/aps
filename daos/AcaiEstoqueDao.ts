import { ReturnDataType } from '../@types/GlobalType';
import { AcaiEstoqueType } from '../@types/AcaiEstoqueType';
import { acaiEstoqueList } from '../mock';

type ReturnAcaiEstoqueType = ReturnDataType<AcaiEstoqueType>;
export class AcaiEstoqueDao {
  create(produto: AcaiEstoqueType): ReturnAcaiEstoqueType {
    acaiEstoqueList.push(...acaiEstoqueList);
    return {
      ok: true,
      error: null,
      data: produto,
    };
  }

  update(id: string, produto: AcaiEstoqueType): ReturnAcaiEstoqueType {
    const produtoIndex = acaiEstoqueList.findIndex((item) => (item.id = id));
    if (produtoIndex !== -1) {
      acaiEstoqueList[produtoIndex] = produto;
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

  retrieve(id: string): ReturnAcaiEstoqueType {
    const produtoIndex = acaiEstoqueList.findIndex((item) => (item.id = id));
    if (produtoIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: acaiEstoqueList[produtoIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  retrieveAll(): ReturnDataType<AcaiEstoqueType[]> {
    return {
      ok: true,
      error: null,
      data: acaiEstoqueList,
    };
  }

  delete(id: string): ReturnAcaiEstoqueType {
    const produtoIndex = acaiEstoqueList.findIndex((item) => (item.id = id));
    if (produtoIndex !== -1) {
      const produtoRemoved = acaiEstoqueList.splice(produtoIndex, 1)[0];
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
