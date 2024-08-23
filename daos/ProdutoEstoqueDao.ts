import ProdutoEstoque, { ProdutoEstoqueType } from '../entities/ProdutoEstoque';

class ProdutoEstoqueDao {
  selectById() {
    return;
  }

  selectByCategoria() {
    return;
  }

  create(payload: ProdutoEstoqueType) {
    const { id, categoria, nome, quantidade } = payload;
    const produto = new ProdutoEstoque(id, categoria, nome, quantidade);

    return;
  }

  update(produtoId: ProdutoEstoqueType['id'], produtoAtualizado: ProdutoEstoqueType) {
    // sql`
    // UPDATE ProdutoEstoque
    // SET produtoAtualizado
    // WHERE id = produtoId
    // `
    return;
  }

  delete(produtoId: ProdutoEstoqueType['id']) {
    return;
  }
}
// def __cursorToListOfProduto(self, cursor):
//   row = cursor.fetchone()
//   result = []
//   while row is not None:
//     result.push(self.__rowToProduto(row))
//     row = cursor.fetchone()
//   return result

// def __rowToProduto(self, row):
//     prod = Produto()
//     prod.nome(row['nome'])
//     prod.estoque(row['quantidade'])
//     prod.validade(row['validade'])
//     prod.descricao(row['descricao'])
//     prod.precoUltimaCompra(row['precoUltimaCompra'])
//     prod.dataFabricacao(row['dataFabricacao'])
//     return prod

// def create(self):
//     produto = Produto()
//     return produto

// def retrieve(self, idProduto):
//     return None

// def update(self, produto):
//   connection = DBController().obterConnection();
//   cursor = connection.cursor()

//   if not hasattr(produto, 'id'):
//     cursor.execute('INSERT INTO Produto (nome, quantidade, validade, precoUltimaCompra, dataFabricacao) VALUES(?, ?, ?, ?, ?, ?)',
//       nome, quantidade, validade, descricao, precoUltimaCompra, dataFabricacao)
//   else:
//     cursor.execute('UPDATE Produto SET nome=?, quantidade=?, validade=?, precoUltimaCompra=?, dataFabricacao=? WHERE id = ?',
//       nome, quantidade, validade, descricao, precoUltimaCompra, dataFabricacao, id)

//   cursor.close()
//   connection.close()
//   return True

// def delete(self, produto):
//     return None

// def listByNome(self, nome):
//   connection = DBController().obterConnection();
//   cursor = connection.cursor()

//   cursor.execute('SELECT * FROM Produto WHERE nome = ?', nome)

//   result = self.__cursorToListOfProduto(cursor)

//   cursor.close()
//   connection.close()

//   return result

// def listByEan13(self, ean13):
//   connection = DBController().obterConnection();
//   cursor = connection.cursor()

//   cursor.execute('SELECT * FROM Produto WHERE ean13 = ?', ean13)

//   result = self.__cursorToListOfProduto(cursor)

//   cursor.close()
//   connection.close()

//   return result
