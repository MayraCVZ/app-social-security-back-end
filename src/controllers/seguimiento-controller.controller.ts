import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {SeguimientoAsunto} from '../models';
import {SeguimientoAsuntoRepository} from '../repositories';

export class SeguimientoControllerController {
  constructor(
    @repository(SeguimientoAsuntoRepository)
    public seguimientoAsuntoRepository : SeguimientoAsuntoRepository,
  ) {}

  @post('/seguimientoAsuntos')
  @response(200, {
    description: 'SeguimientoAsunto model instance',
    content: {'application/json': {schema: getModelSchemaRef(SeguimientoAsunto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SeguimientoAsunto, {
            title: 'NewSeguimientoAsunto',
            exclude: ['idSeguimiento'],
          }),
        },
      },
    })
    seguimientoAsunto: Omit<SeguimientoAsunto, 'idSeguimiento'>,
  ): Promise<SeguimientoAsunto> {
    return this.seguimientoAsuntoRepository.create(seguimientoAsunto);
  }

  @get('/seguimientoAsuntos/count')
  @response(200, {
    description: 'SeguimientoAsunto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SeguimientoAsunto) where?: Where<SeguimientoAsunto>,
  ): Promise<Count> {
    return this.seguimientoAsuntoRepository.count(where);
  }

  @get('/seguimientoAsuntos')
  @response(200, {
    description: 'Array of SeguimientoAsunto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SeguimientoAsunto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SeguimientoAsunto) filter?: Filter<SeguimientoAsunto>,
  ): Promise<SeguimientoAsunto[]> {
    return this.seguimientoAsuntoRepository.find(filter);
  }

  @patch('/seguimientoAsuntos')
  @response(200, {
    description: 'SeguimientoAsunto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SeguimientoAsunto, {partial: true}),
        },
      },
    })
    seguimientoAsunto: SeguimientoAsunto,
    @param.where(SeguimientoAsunto) where?: Where<SeguimientoAsunto>,
  ): Promise<Count> {
    return this.seguimientoAsuntoRepository.updateAll(seguimientoAsunto, where);
  }

  @get('/seguimientoAsuntos/{id}')
  @response(200, {
    description: 'SeguimientoAsunto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SeguimientoAsunto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SeguimientoAsunto, {exclude: 'where'}) filter?: FilterExcludingWhere<SeguimientoAsunto>
  ): Promise<SeguimientoAsunto> {
    return this.seguimientoAsuntoRepository.findById(id, filter);
  }

  @patch('/seguimientoAsuntos/{id}')
  @response(204, {
    description: 'SeguimientoAsunto PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SeguimientoAsunto, {partial: true}),
        },
      },
    })
    seguimientoAsunto: SeguimientoAsunto,
  ): Promise<void> {
    await this.seguimientoAsuntoRepository.updateById(id, seguimientoAsunto);
  }

  @put('/seguimientoAsuntos/{id}')
  @response(204, {
    description: 'SeguimientoAsunto PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() seguimientoAsunto: SeguimientoAsunto,
  ): Promise<void> {
    await this.seguimientoAsuntoRepository.replaceById(id, seguimientoAsunto);
  }

  @del('/seguimientoAsuntos/{id}')
  @response(204, {
    description: 'SeguimientoAsunto DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.seguimientoAsuntoRepository.deleteById(id);
  }
}
