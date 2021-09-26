import { QueryBus } from '@nestjs/cqrs';
import { Query, Resolver } from '@nestjs/graphql';
import { Addresses } from 'src/graphql';
import { ReadAddressesQuery } from './queries/impl';

@Resolver('addresses')
export class AddressesQueryResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query()
  addresses(): Promise<Addresses> {
    return this.queryBus.execute(new ReadAddressesQuery());
  }
}
