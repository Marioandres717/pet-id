import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetAllPetSpeciesQuery, GetPetSpeciesQuery } from './queries/impl';
import { PetSpecies } from './repository/pet-species.entity';

@Resolver('pet_species')
export class PetSpeciesQueryResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query()
  pet_species_by_pk(@Args('id') id: number): Promise<PetSpecies> {
    return this.queryBus.execute(new GetPetSpeciesQuery(id));
  }

  @Query()
  pet_species(): Promise<PetSpecies[]> {
    return this.queryBus.execute(new GetAllPetSpeciesQuery());
  }
}
