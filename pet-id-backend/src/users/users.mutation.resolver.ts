import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Users, Users_insert_input } from 'src/graphql';
import { CreateUserCommand } from './commands/impl/create-user.command';

@Resolver('users')
export class UsersMutationResolver {
  constructor(private readonly commandBus: CommandBus) {}
  @Mutation()
  insert_users_one(@Args('object') data: Users_insert_input): Promise<Users> {
    const { name, authId, email } = data;
    return this.commandBus.execute(new CreateUserCommand(name, authId, email));
  }
}
