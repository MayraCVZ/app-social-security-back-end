import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {JsonDataDataSource} from '../datasources';
import {SeguimientoAsunto, SeguimientoAsuntoRelations} from '../models';

export class SeguimientoAsuntoRepository extends DefaultCrudRepository<
  SeguimientoAsunto,
  typeof SeguimientoAsunto.prototype.idSeguimiento,
  SeguimientoAsuntoRelations
> {
  constructor(
    @inject('datasources.jsonData') dataSource: JsonDataDataSource,
  ) {
    super(SeguimientoAsunto, dataSource);
  }
}
