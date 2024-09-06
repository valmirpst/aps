import { EntregaType } from '../@types/EntregaType';
import { ReturnDataType } from '../@types/GlobalType';
import { entregaList } from '../mock';

export type ReturnEntregaType = ReturnDataType<EntregaType>;
export class EntregaDao {
  create(entrega: EntregaType): ReturnEntregaType {
    entregaList.push(...entregaList);
    return {
      ok: true,
      error: null,
      data: entrega,
    };
  }

  update(id: string, entrega: EntregaType): ReturnEntregaType {
    const entregaIndex = entregaList.findIndex((item) => (item.id = id));
    if (entregaIndex !== -1) {
      entregaList[entregaIndex] = entrega;
      return {
        ok: true,
        error: null,
        data: entrega,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum entrega.',
      data: null,
    };
  }

  retrieve(id: string): ReturnEntregaType {
    const entregaIndex = entregaList.findIndex((item) => (item.id = id));
    if (entregaIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: entregaList[entregaIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum entrega.',
      data: null,
    };
  }

  delete(id: string): ReturnEntregaType {
    const entregaIndex = entregaList.findIndex((item) => (item.id = id));
    if (entregaIndex !== -1) {
      const entregaRemoved = entregaList.splice(entregaIndex, 1)[0];
      return {
        ok: true,
        error: null,
        data: entregaRemoved,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum entrega.',
      data: null,
    };
  }
}
