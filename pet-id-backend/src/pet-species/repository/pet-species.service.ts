import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PetSpecies } from './pet-species.entity';

@Injectable()
export class PetSpeciesService {
  constructor(
    @InjectRepository(PetSpecies)
    private readonly repository: Repository<PetSpecies>,
  ) {}

  create(type: string) {
    const petSpecies = this.repository.create({ type });
    return this.repository.save(petSpecies);
  }
  findAll() {
    return this.repository.find();
  }
  findOneById(id: number) {
    return this.repository.findOne(id);
  }
}
