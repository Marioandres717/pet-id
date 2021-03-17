import { CommandBus } from '@nestjs/cqrs';
import { Args, ResolveField, Resolver } from '@nestjs/graphql';
import { Pet_species_insert_input } from 'src/graphql';
import { CreateOnePetSpeciesCommand } from './commands/impl/create-one-pet-species.command';

@Resolver('mutation_root')
export class PetSpeciesMutationResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @ResolveField()
  insert_pet_species_one(@Args('object') data: Pet_species_insert_input) {
    const { type } = data;
    return this.commandBus.execute(new CreateOnePetSpeciesCommand(type));
  }
}
