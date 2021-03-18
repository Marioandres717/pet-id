import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PetsService } from './respository/pets.service';

@Resolver('query_root')
export class PetsQueryResolver {
  constructor(private readonly repository: PetsService) {}

  @ResolveField()
  async pets_by_pk(@Args('id') id: number) {
    const pet = await this.repository.findOneById(id);
    return pet;
    // return { ...pet, pet_species: { ...species }, species: pet_species.id };
  }
}
