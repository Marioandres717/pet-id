import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RegisterUserInput, User } from 'src/new-graphql';
import { CreateUserCommand } from '../commands/impl/create-user.command';

@Resolver('user')
export class UserMutationResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Mutation()
  registerUser(@Args('input') args: RegisterUserInput): Promise<User> {
    const { name, email } = args;
    return this.commandBus.execute(
      new CreateUserCommand(name, 'authId', email),
    );
  }
}
