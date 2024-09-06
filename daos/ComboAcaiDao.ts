import { ComboAcaiType } from '../@types/ComboAcaiType';
import { ReturnDataType } from '../@types/GlobalType';
import { ComboAcaiSchema } from '../dvos/ComboAcaiDvo';
import { comboAcaiList } from '../mock';

type ReturnComboAcaiType = ReturnDataType<ComboAcaiType>;
export class ComboAcaiDao {
  create(comboAcai: ComboAcaiType): ReturnComboAcaiType {
    const validation = ComboAcaiSchema.safeParse(comboAcai);

    if (!validation.success) {
      return {
        ok: false,
        error: validation.error.toString(),
        data: null,
      };
    }

    comboAcaiList.push(...comboAcaiList);
    return {
      ok: true,
      error: null,
      data: comboAcai,
    };
  }

  update(id: string, comboAcai: ComboAcaiType): ReturnComboAcaiType {
    const comboAcaiIndex = comboAcaiList.findIndex((item) => (item.id = id));
    if (comboAcaiIndex !== -1) {
      comboAcaiList[comboAcaiIndex] = comboAcai;
      return {
        ok: true,
        error: null,
        data: comboAcai,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  retrieve(id: string): ReturnComboAcaiType {
    const comboAcaiIndex = comboAcaiList.findIndex((item) => (item.id = id));
    if (comboAcaiIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: comboAcaiList[comboAcaiIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  retrieveAll(): ReturnDataType<ComboAcaiType[]> {
    return {
      ok: true,
      error: null,
      data: comboAcaiList,
    };
  }

  delete(id: string): ReturnComboAcaiType {
    const produtoIndex = comboAcaiList.findIndex((item) => (item.id = id));
    if (produtoIndex !== -1) {
      const comboAcaiRemoved = comboAcaiList.splice(produtoIndex, 1)[0];
      return {
        ok: true,
        error: null,
        data: comboAcaiRemoved,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }
}
