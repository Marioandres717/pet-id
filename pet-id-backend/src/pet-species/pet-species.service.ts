import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet_species } from 'src/graphql';
import { Repository } from 'typeorm';
import { PetSpecies } from './pet-species.entity';

@Injectable()
export class PetSpeciesService {
  constructor(
    @InjectRepository(PetSpecies)
    private petSpeciesRepository: Repository<PetSpecies>,
  ) {}

  findAll(): Promise<Pet_species[]> {
    return this.petSpeciesRepository.find();
  }
  findOne(id: number): Promise<Pet_species> {
    return this.petSpeciesRepository.findOne(id);
  }
}
