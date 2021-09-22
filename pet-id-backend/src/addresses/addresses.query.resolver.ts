import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Addresses } from 'src/graphql';
import { ReadAddressQuery } from './queries/impl';

@Resolver('addresses')
export class AddressesQueryResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query()
  readAddress(): Promise<Addresses> {
    return this.queryBus.execute(new ReadAddressQuery(1));
  }
}
