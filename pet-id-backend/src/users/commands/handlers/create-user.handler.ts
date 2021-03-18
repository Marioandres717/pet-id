import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UsersService } from 'src/users/repository/users.service';
import { CreateUserCommand } from '../impl/create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly repository: UsersService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateUserCommand) {
    const { name, authId, email } = command;
    return this.publisher.mergeObjectContext(
      await this.repository.create(name, authId, email),
    );
  }
}
