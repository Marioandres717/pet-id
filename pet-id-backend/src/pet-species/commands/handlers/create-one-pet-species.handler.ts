import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PetSpeciesService } from 'src/pet-species/repository';
import { CreateOnePetSpeciesCommand } from '../impl/create-one-pet-species.command';

@CommandHandler(CreateOnePetSpeciesCommand)
export class CreateOnePetSpeciesHandler
  implements ICommandHandler<CreateOnePetSpeciesCommand> {
  constructor(
    private readonly repository: PetSpeciesService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateOnePetSpeciesCommand) {
    const { type } = command;
    const petSpecies = this.publisher.mergeObjectContext(
      await this.repository.create(type),
    );
    petSpecies.petSpeciesCreated();
    petSpecies.commit();
    return petSpecies;
  }
}
