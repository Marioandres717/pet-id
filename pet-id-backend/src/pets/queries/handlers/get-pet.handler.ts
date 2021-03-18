import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PetsService } from 'src/pets/respository/pets.service';
import { GetPetQuery } from '../impl/get-pet.query';

@QueryHandler(GetPetQuery)
export class GetPetHandler implements IQueryHandler<GetPetQuery> {
  constructor(private readonly repository: PetsService) {}
  execute(query: GetPetQuery): Promise<any> {
    const { id } = query;
    return this.repository.findOneById(id);
  }
}
