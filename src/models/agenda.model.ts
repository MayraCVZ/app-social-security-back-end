import {Entity, model, property} from '@loopback/repository';

@model()
export class Agenda extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idAgenda?: number;

  @property({
    type: 'number',
    required: true,
  })
  numExpediente: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoCita: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  hora: string;

  @property({
    type: 'string',
    required: true,
  })
  comentarios: string;

  constructor(data?: Partial<Agenda>) {
    super(data);
  }
}

export interface AgendaRelations {
  // describe navigational properties here
}

export type AgendaWithRelations = Agenda & AgendaRelations;
