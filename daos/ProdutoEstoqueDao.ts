import { produtos } from '../data/produtos';
import ProdutoEstoque, { ProdutoEstoqueType } from '../entities/ProdutoEstoque';

class ProdutoEstoqueDao {
  selectAll() {
    return produtos;
  }

  selectById(id: ProdutoEstoqueType['id']) {
    return produtos.filter(produto => produto.id === id);
  }

  selectByCategoria(categoria: ProdutoEstoqueType['categoria']) {
    return produtos.filter(produto => produto.categoria === categoria);
  }

  insert(payload: ProdutoEstoqueType) {
    const { id, categoria, nome, quantidade } = payload;
    const novoProduto = new ProdutoEstoque(id, categoria, nome, quantidade);

    try {
      const existe = produtos.find(produto => {
        if (produto.id === novoProduto.id) {
          produto.quantidade += novoProduto.quantidade;
          return true;
        }
        return false;
      });
      if (!existe) produtos.push(novoProduto);

      return 'Produto inserido com sucesso!';
    } catch (err) {
      console.log(err);
      return 'Erro ao inserir produto.';
    }
  }

  delete(id: ProdutoEstoqueType['id']) {
    try {
      const index = produtos.findIndex(produto => produto.id === id);
      if (index !== -1) {
        produtos.splice(index, 1);
      } else {
        throw new Error('Produto nao encontrado.');
      }
    } catch (err) {
      console.log(err);
      if (err.message) {
        return err.message;
      }
      return 'Erro ao deletar produto.';
    }
  }

  update(produtoId: ProdutoEstoqueType['id'], produtoAtualizado: ProdutoEstoqueType) {
    // sql`
    // UPDATE ProdutoEstoque
    // SET produtoAtualizado
    // WHERE id = produtoId
    // `
    return;
  }
}
