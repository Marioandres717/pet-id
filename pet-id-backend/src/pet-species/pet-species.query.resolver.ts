import { QueryBus } from '@nestjs/cqrs';
import { Args, ResolveField, Resolver } from '@nestjs/graphql';
import {
  Pet_species_bool_exp,
  Pet_species_order_by,
  Pet_species_select_column,
} from 'src/graphql';
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
  async pet_species(
    @Args('distinct_on') distinct_on?: Pet_species_select_column[],
    @Args('limit') limit?: number,
    @Args('offset') offset?: number,
    @Args('order_by') order_by?: Pet_species_order_by,
    @Args('where') where?: Pet_species_bool_exp,
  ): Promise<PetSpecies[]> {
    console.log(clc.greenBright('pet-species-resolver-get-pet-species...'));
    return this.queryBus.execute(new GetAllPetSpeciesQuery());
  }
}
