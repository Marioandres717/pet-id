import { QueryBus } from '@nestjs/cqrs';
import { Args, ResolveField, Resolver } from '@nestjs/graphql';
import * as clc from 'cli-color';
import { GetAllPetSpeciesQuery, GetPetSpeciesQuery } from './queries/impl';
import { PetSpecies } from './repository/pet-species.entity';

@Resolver('query_root')
export class PetSpeciesQueryResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @ResolveField()
  async pet_species_by_pk(@Args('id') id: number): Promise<PetSpecies> {
    return this.queryBus.execute(new GetPetSpeciesQuery(id));
  }

  @ResolveField()
  async pet_species(): Promise<PetSpecies[]> {
    return this.queryBus.execute(new GetAllPetSpeciesQuery());
  }
}
