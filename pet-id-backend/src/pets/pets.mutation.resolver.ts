import { CommandBus } from '@nestjs/cqrs';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Pets_insert_input } from 'src/graphql';
import { CreateOnePetCommand } from './commands/impl/create-one-pet.command';

@Resolver('New_pets')
export class PetsMutationResolver {
  constructor(private readonly commandBus: CommandBus) {}

  @Mutation()
  async insert_pets_one(@Args('object') data: Pets_insert_input) {
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

  // @Resolver('pets')
  // @ResolveField()
  // pet_species(@Parent() pet) {
  //   return this.commandBus.execute();
  // }
}
