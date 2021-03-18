import { QueryBus } from '@nestjs/cqrs';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GetPetSpeciesQuery } from 'src/pet-species/queries/impl';
import { GetPetQuery } from './queries/impl/get-pet.query';

@Resolver('pets')
export class PetsQueryResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query()
  pets_by_pk(@Args('id') id: number) {
    return this.queryBus.execute(new GetPetQuery(id));
  }

  @ResolveField()
  species(@Parent() pet) {
    return pet.pet_species.id;
  }

  @ResolveField()
  pet_species(@Parent() pet) {
    return this.queryBus.execute(new GetPetSpeciesQuery(pet.pet_species.id));
  }
}
