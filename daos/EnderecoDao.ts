import { EnderecoType } from '../@types/EnderecoType';
import { ReturnDataType } from '../@types/GlobalType';
import { Endereco } from '../entities/Endereco';
import { enderecoList } from '../mock';

export type ReturnEnderecoType = ReturnDataType<EnderecoType>;
export class PedidoDao {
  create(endereco: EnderecoType): ReturnEnderecoType {
    if (!(endereco instanceof Endereco)) {
      return {
        ok: false,
        error: 'Os dados passados para criação do funcionário são inválidos',
        data: null,
      };
    }

    enderecoList.push(...enderecoList);
    return {
      ok: true,
      error: null,
      data: endereco,
    };
  }

  update(id: string, endereco: EnderecoType): ReturnEnderecoType {
    const enderecoIndex = enderecoList.findIndex((item) => (item.id = id));
    if (enderecoIndex !== -1) {
      enderecoList[enderecoIndex] = endereco;
      return {
        ok: true,
        error: null,
        data: endereco,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  retrieve(id: string): ReturnEnderecoType {
    const enderecoIndex = enderecoList.findIndex((item) => (item.id = id));
    if (enderecoIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: enderecoList[enderecoIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  delete(id: string): ReturnEnderecoType {
    const enderecoIndex = enderecoList.findIndex((item) => (item.id = id));
    if (enderecoIndex !== -1) {
      const enderecoRemoved = enderecoList.splice(enderecoIndex, 1)[0];
      return {
        ok: true,
        error: null,
        data: enderecoRemoved,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }
}
