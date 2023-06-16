import {Entity, model, property} from '@loopback/repository';

@model()
export class SeguimientoAsunto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idSeguimiento?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  numExpediente: number;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  horaInicio: string;

  @property({
    type: 'string',
    required: true,
  })
  horaFin: string;

  @property({
    type: 'string',
    required: true,
  })
  detalle: string;

  constructor(data?: Partial<SeguimientoAsunto>) {
    super(data);
  }
}

export interface SeguimientoAsuntoRelations {
  // describe navigational properties here
}

export type SeguimientoAsuntoWithRelations = SeguimientoAsunto & SeguimientoAsuntoRelations;
