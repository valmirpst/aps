import { ClienteType } from '../@types/ClienteType';
import { ClienteDao, ReturnClienteType } from '../daos/ClienteDao';
import { ClienteSchema } from '../dvos/ClienteDvo';

export class ClienteManager {
  clienteDao: ClienteDao;

  constructor() {
    this.clienteDao = new ClienteDao();
  }

  cadastrarCliente(cliente: ClienteType): ReturnClienteType {
    const validation = ClienteSchema.safeParse(cliente);

    if (!validation.success) {
      return {
        ok: false,
        error: validation.error.toString(),
        data: null,
      };
    }

    return this.clienteDao.create(cliente);
  }

  atualizarCadastro(
    clienteCpf: string,
    cliente: ClienteType
  ): ReturnClienteType {
    const validation = ClienteSchema.safeParse(cliente);

    if (!validation.success) {
      return {
        ok: false,
        error: validation.error.toString(),
        data: null,
      };
    }

    const clienteAtualizar = this.clienteDao.retrieve(clienteCpf);

    if (clienteAtualizar.data) {
      return this.clienteDao.update(clienteCpf, cliente);
    }

    return clienteAtualizar;
  }

  excluirCadastro(clienteCpf: string): ReturnClienteType {
    return this.clienteDao.delete(clienteCpf);
  }

  buscarCliente(clienteCpf: string): ReturnClienteType {
    return this.clienteDao.retrieve(clienteCpf);
  }
}
