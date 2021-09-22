import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Addresses_insert_input } from 'src/graphql';
import { RegisterAddressCommand } from './commands/impl';

@Resolver('addresses')
export class AddressesMutationResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Mutation()
  insert_addresses_one(
    @Args('object') data: Addresses_insert_input,
  ): Promise<any> {
    return this.commandBus.execute(new RegisterAddressCommand(data));
  }
}
