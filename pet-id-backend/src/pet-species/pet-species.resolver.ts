import { Args, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Pet_species_bool_exp, Pet_species_order_by, Pet_species_select_column } from "src/graphql";
import { PetSpecies } from "./pet-species.model";
import { PetSpeciesService } from "./pet-species.service";

@Resolver('query_root')
export class PetSpeciesResolver {
    constructor(private petSpeciesService: PetSpeciesService) {}

    @ResolveField()
    async pet_species_by_pk(@Args('id') id: number): Promise<PetSpecies> {
        return this.petSpeciesService.findOne(id);
    }
    
    @ResolveField()
    async pet_species(
        @Args('distinct_on') distinct_on?: Pet_species_select_column[],
        @Args('limit') limit?: number, @Args('offset') offset?: number,
        @Args('order_by') order_by?: Pet_species_order_by,
        @Args('where') where?: Pet_species_bool_exp): Promise<PetSpecies[]> {
        return this.petSpeciesService.findAll();
    }
}