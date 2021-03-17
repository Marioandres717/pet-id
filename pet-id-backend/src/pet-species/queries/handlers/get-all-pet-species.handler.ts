import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { PetSpeciesService } from 'src/pet-species/repository/pet-species.service';
import { GetAllPetSpeciesQuery } from '../impl';

@QueryHandler(GetAllPetSpeciesQuery)
export class GetAllPetSpeciesHandler
  implements IQueryHandler<GetAllPetSpeciesQuery> {
  constructor(private readonly repository: PetSpeciesService) {}

  async execute(query: GetAllPetSpeciesQuery) {
    console.log(clc.greenBright('get-pet-species-handler...'));
    return await this.repository.findAll();
  }
}
