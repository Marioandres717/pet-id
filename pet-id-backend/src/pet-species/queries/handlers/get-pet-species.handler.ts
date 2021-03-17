import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PetSpeciesService } from 'src/pet-species/repository/pet-species.service';
import { GetPetSpeciesQuery } from '../impl';

@QueryHandler(GetPetSpeciesQuery)
export class GetPetSpeciesHandler implements IQueryHandler<GetPetSpeciesQuery> {
  constructor(private readonly repository: PetSpeciesService) {}
  async execute(query: GetPetSpeciesQuery): Promise<any> {
    const { id } = query;
    return this.repository.findOne(id);
  }
}
