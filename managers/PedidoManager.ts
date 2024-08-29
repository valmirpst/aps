type AcaiType = {
  nome: string;
  quantidade: number;
  adicionais: string[];
};

type EnderecoType = {
  rua: string;
  bairro: string;
  numero: string;
};

class PedidoManager {
  confirmarPedido(acais: AcaiType[], endereco: EnderecoType) {}

  cancelarPedido(pedidoId: string) {}

  avaliarPedido(pedidoId: string, mensagem: string) {}

  buscarPedidos(usuario: string) {}
}
