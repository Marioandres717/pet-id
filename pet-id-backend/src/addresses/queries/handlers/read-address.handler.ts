import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ReadAddressesQuery } from 'src/addresses/queries/impl/';
import { AddressesService } from 'src/addresses/repository/addresses.service';

@QueryHandler(ReadAddressesQuery)
export class ReadAddressesHandler implements IQueryHandler<ReadAddressesQuery> {
  constructor(private readonly service: AddressesService) {}

  async execute() {
    return await this.service.readAddresses();
  }
}
