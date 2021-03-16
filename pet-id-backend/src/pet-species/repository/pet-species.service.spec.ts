import { Test, TestingModule } from '@nestjs/testing';
import { PetSpeciesRepository } from './repository/pet-species.repository';

describe('PetSpeciesService', () => {
  let service: PetSpeciesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PetSpeciesRepository],
    }).compile();

    service = module.get<PetSpeciesRepository>(PetSpeciesRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
