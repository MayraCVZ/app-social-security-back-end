import {Entity, model, property} from '@loopback/repository';

@model()
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  key?: number;

  @property({
    type: 'string',
    required: true,
  })
  value: string;

  /*@property({
    type: 'number',
    required: true,
  })
  numExpediente: number;*/


  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
