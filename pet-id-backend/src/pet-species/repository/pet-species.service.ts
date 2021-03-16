import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pet_species, Pet_species_insert_input } from 'src/graphql';
import { Repository } from 'typeorm';
import { PetSpecies } from './pet-species.entity';

@Injectable()
export class PetSpeciesService {
  constructor(
    @InjectRepository(PetSpecies)
    private petSpeciesRepository: Repository<PetSpecies>,
  ) {}

  async createPetSpecies(
    petSpeciesDto: Pet_species_insert_input,
  ): Promise<Pet_species[]> {
    const { type } = petSpeciesDto;
    const petSpecies = await this.petSpeciesRepository.create({ type });
    return [petSpecies];
  }
  findAll(): Promise<Pet_species[]> {
    return this.petSpeciesRepository.find();
  }
  findOne(id: number): Promise<Pet_species> {
    return this.petSpeciesRepository.findOne(id);
  }
}
