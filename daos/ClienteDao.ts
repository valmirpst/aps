import { ClienteType } from '../@types/ClienteType';
import { ReturnDataType } from '../@types/GlobalType';
import { clientesList } from '../mock';

export type ReturnClienteType = ReturnDataType<ClienteType>;
export class ClienteDao {
  create(cliente: ClienteType): ReturnClienteType {
    // Fazer validação se o cliente é válido
    clientesList.push({ ...cliente });
    return {
      ok: true,
      error: null,
      data: cliente,
    };
  }

  update(cpf: string, cliente: ClienteType): ReturnClienteType {
    const clienteIndex = clientesList.findIndex((item) => (item.cpf = cpf));
    if (clienteIndex !== -1) {
      clientesList[clienteIndex] = cliente;
      return {
        ok: true,
        error: null,
        data: cliente,
      };
    }
    return {
      ok: false,
      error: 'O CPF passado não corresponde a nenhum cliente.',
      data: null,
    };
  }

  retrieve(cpf: string): ReturnClienteType {
    const clienteIndex = clientesList.findIndex((item) => (item.cpf = cpf));
    if (clienteIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: clientesList[clienteIndex],
      };
    }
    return {
      ok: false,
      error: 'O CPF passado não corresponde a nenhum cliente.',
      data: null,
    };
  }

  delete(cpf: string): ReturnClienteType {
    const clienteIndex = clientesList.findIndex((item) => (item.cpf = cpf));
    if (clienteIndex !== -1) {
      const comboAcaiRemoved = clientesList.splice(clienteIndex, 1)[0];
      return {
        ok: true,
        error: null,
        data: comboAcaiRemoved,
      };
    }
    return {
      ok: false,
      error: 'O CPF passado não corresponde a nenhum cliente.',
      data: null,
    };
  }
}
