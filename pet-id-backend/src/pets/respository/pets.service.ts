import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pets } from './pets.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets)
    private readonly repository: Repository<Pets>,
  ) {}

  create(
    name: string,
    species: number,
    description: string = null,
    avatarId: number = null,
  ) {
    const pet = this.repository.create({
      name,
      description,
      pet_species: {
        id: species,
      },
    });
    return this.repository.save(pet);
  }

  findOneById(id: number) {
    return this.repository.findOne(id);
  }
}
