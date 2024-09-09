import { AvaliacaoType } from '../@types/AvaliacaoType';
import { ReturnDataType } from '../@types/GlobalType';
import { Avaliacao } from '../entities/Avaliacao';
import { avaliacaoList } from '../mock';

export type ReturnAvaliacaoType = ReturnDataType<AvaliacaoType>;
export class PedidoDao {
  create(avaliacao: AvaliacaoType): ReturnAvaliacaoType {
    if (!(avaliacao instanceof Avaliacao)) {
      return {
        ok: false,
        error: 'Os dados passados para criação do funcionário são inválidos',
        data: null,
      };
    }

    avaliacaoList.push(...avaliacaoList);
    return {
      ok: true,
      error: null,
      data: avaliacao,
    };
  }

  update(id: string, avaliacao: AvaliacaoType): ReturnAvaliacaoType {
    const avaliacaoIndex = avaliacaoList.findIndex((item) => (item.id = id));
    if (avaliacaoIndex !== -1) {
      avaliacaoList[avaliacaoIndex] = avaliacao;
      return {
        ok: true,
        error: null,
        data: avaliacao,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  retrieve(id: string): ReturnAvaliacaoType {
    const avaliacaoIndex = avaliacaoList.findIndex((item) => (item.id = id));
    if (avaliacaoIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: avaliacaoList[avaliacaoIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  delete(id: string): ReturnAvaliacaoType {
    const avaliacaoIndex = avaliacaoList.findIndex((item) => (item.id = id));
    if (avaliacaoIndex !== -1) {
      const avaliacaoRemoved = avaliacaoList.splice(avaliacaoIndex, 1)[0];
      return {
        ok: true,
        error: null,
        data: avaliacaoRemoved,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }
}
