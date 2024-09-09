import { ReturnDataType } from '../@types/GlobalType';
import { adicionaisEstoqueList } from '../mock';
import { AdicionaisEstoqueType } from '../@types/AdicionaisEstoqueType';
import { AdicionaisEstoque } from '../entities/AdicionaisEstoque';

type ReturnAdicionaisEstoqueType = ReturnDataType<AdicionaisEstoqueType>;
export class AdicionaisEstoqueDao {
  create(adicionais: AdicionaisEstoqueType): ReturnAdicionaisEstoqueType {
    if (adicionais instanceof AdicionaisEstoque) {
      adicionaisEstoqueList.push(...adicionaisEstoqueList);
    }
    return {
      ok: true,
      error: null,
      data: adicionais,
    };
  }

  update(
    id: string,
    adicionais: AdicionaisEstoqueType
  ): ReturnAdicionaisEstoqueType {
    const adicionaisIndex = adicionaisEstoqueList.findIndex(
      (item) => (item.id = id)
    );
    if (adicionaisIndex !== -1) {
      adicionaisEstoqueList[adicionaisIndex] = adicionais;
      return {
        ok: true,
        error: null,
        data: adicionais,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum adicional.',
      data: null,
    };
  }

  retrieve(id: string): ReturnAdicionaisEstoqueType {
    const adicionalIndex = adicionaisEstoqueList.findIndex(
      (item) => (item.id = id)
    );
    if (adicionalIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: adicionaisEstoqueList[adicionalIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum adicional.',
      data: null,
    };
  }

  retrieveAll(): ReturnDataType<AdicionaisEstoqueType[]> {
    return {
      ok: true,
      error: null,
      data: adicionaisEstoqueList,
    };
  }

  delete(id: string): ReturnAdicionaisEstoqueType {
    const adicionalIndex = adicionaisEstoqueList.findIndex(
      (item) => (item.id = id)
    );
    if (adicionalIndex !== -1) {
      const adicionalRemoved = adicionaisEstoqueList.splice(
        adicionalIndex,
        1
      )[0];
      return {
        ok: true,
        error: null,
        data: adicionalRemoved,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }
}
