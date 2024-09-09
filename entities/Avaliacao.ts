import { AvaliacaoType } from '../@types/AvaliacaoType';

export class Avaliacao {
  id: AvaliacaoType['id'];
  estrelas: AvaliacaoType['estrelas'];
  comentario: AvaliacaoType['comentario'];
  constructor(
    id: AvaliacaoType['id'],
    estrelas: AvaliacaoType['estrelas'],
    comentario: AvaliacaoType['comentario']
  ) {
    this.id = id;
    this.estrelas = estrelas;
    this.comentario = comentario;
  }
}
