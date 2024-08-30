import { ClienteType } from '../@types/ClienteType';
import { ClienteDao, ReturnClienteType } from '../daos/ClienteDao';

export class ClienteManager {
  clienteDao: ClienteDao;

  constructor() {
    this.clienteDao = new ClienteDao();
  }

  cadastrarCliente(cliente: ClienteType): ReturnClienteType {
    return this.clienteDao.create(cliente);
  }

  atualizarCadastro(
    clienteCpf: string,
    cliente: ClienteType
  ): ReturnClienteType {
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
