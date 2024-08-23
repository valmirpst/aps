import { ComboAcai, ComboAcaiType } from "../entities/ComboAcai";

class ComboAcaiDao {
  create(payload: ComboAcaiType) {
    const { nome, preco, tamanhoMl, itens } = payload;
    const comboAcai = new ComboAcai(nome, preco, tamanhoMl, itens);
  }

  update(id: string, comboAcai: ComboAcaiType) {}
}
