import { FuncionarioType } from '../@types/FuncionarioType';
import { ReturnDataType } from '../@types/GlobalType';
import { Funcionario } from '../entities/Funcionario';
import { funcionarioList } from '../mock';

export type ReturnFuncionarioType = ReturnDataType<FuncionarioType>;
export class FuncionarioDao {
  create(funcionario: FuncionarioType): ReturnFuncionarioType {
    if (!(funcionario instanceof Funcionario)) {
      return {
        ok: false,
        error: 'Os dados passados para criação do funcionário são inválidos',
        data: null,
      };
    }

    funcionarioList.push(...funcionarioList);
    return {
      ok: true,
      error: null,
      data: funcionario,
    };
  }

  update(cpf: string, funcionario: FuncionarioType): ReturnFuncionarioType {
    const funcionarioIndex = funcionarioList.findIndex(
      (item) => (item.cpf = cpf)
    );
    if (funcionarioIndex !== -1) {
      funcionarioList[funcionarioIndex] = funcionario;
      return {
        ok: true,
        error: null,
        data: funcionario,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  retrieve(cpf: string): ReturnFuncionarioType {
    const funcionarioIndex = funcionarioList.findIndex(
      (item) => (item.cpf = cpf)
    );
    if (funcionarioIndex !== -1) {
      return {
        ok: true,
        error: null,
        data: funcionarioList[funcionarioIndex],
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }

  delete(cpf: string): ReturnFuncionarioType {
    const funcionarioIndex = funcionarioList.findIndex(
      (item) => (item.cpf = cpf)
    );
    if (funcionarioIndex !== -1) {
      const funcionarioRemoved = funcionarioList.splice(funcionarioIndex, 1)[0];
      return {
        ok: true,
        error: null,
        data: funcionarioRemoved,
      };
    }
    return {
      ok: false,
      error: 'O ID passado não corresponde a nenhum produto.',
      data: null,
    };
  }
}
