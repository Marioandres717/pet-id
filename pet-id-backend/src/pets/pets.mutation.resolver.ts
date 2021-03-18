import { CommandBus } from '@nestjs/cqrs';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Pets, Pets_insert_input } from 'src/graphql';
import { CreateOnePetCommand } from './commands/impl/create-one-pet.command';

@Resolver('pets')
export class PetsMutationResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Mutation()
  async insert_pets_one(
    @Args('object') data: Pets_insert_input,
  ): Promise<Pets> {
    const { name, description, species, avatarId: avatar } = data;
    const pet = await this.commandBus.execute(
      new CreateOnePetCommand({
        name,
        description,
        species,
        avatar,
      }),
    );
    return pet;
  }
}
