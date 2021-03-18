import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PetsService } from 'src/pets/respository/pets.service';
import { CreateOnePetCommand } from '../impl/create-one-pet.command';

@CommandHandler(CreateOnePetCommand)
export class CreateOnePetHandler
  implements ICommandHandler<CreateOnePetCommand> {
  constructor(
    private readonly petsService: PetsService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateOnePetCommand) {
    const { name, description, species } = command.properties;
    return this.publisher.mergeObjectContext(
      await this.petsService.create(name, species, description),
    );
  }
}
