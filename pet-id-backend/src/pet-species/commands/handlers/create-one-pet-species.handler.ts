import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PetSpeciesService } from 'src/pet-species/repository/pet-species.service';
import { CreateOnePetSpeciesCommand } from '../impl/create-one-pet-species.command';

@CommandHandler(CreateOnePetSpeciesCommand)
export class CreateOnePetSpeciesHandler
  implements ICommandHandler<CreateOnePetSpeciesCommand> {
  constructor(
    private readonly repository: PetSpeciesService,
    private readonly publisher: EventPublisher,
  ) {}

  execute(command: CreateOnePetSpeciesCommand) {
    const { type } = command;
    return this.repository.createOnePetSpecies(type);
  }
}
