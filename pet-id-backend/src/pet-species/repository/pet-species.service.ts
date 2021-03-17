import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PetSpecies } from './pet-species.entity';

@Injectable()
export class PetSpeciesService {
  constructor(
    @InjectRepository(PetSpecies)
    private petSpeciesRepository: Repository<PetSpecies>,
  ) {}

  async createOnePetSpecies(type: string): Promise<PetSpecies> {
    return await this.petSpeciesRepository.save({ type });
  }
  findAll(): Promise<PetSpecies[]> {
    return this.petSpeciesRepository.find();
  }
  findOne(id: number): Promise<PetSpecies> {
    return this.petSpeciesRepository.findOne(id);
  }
}
