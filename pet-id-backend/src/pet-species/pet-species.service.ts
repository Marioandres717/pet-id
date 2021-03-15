import { Injectable } from '@nestjs/common';
import { Pet_species } from 'src/graphql';
import { petSpecies } from './repository/fixtures/pet-species';

@Injectable()
export class PetSpeciesService {
    private readonly petSpecies = [petSpecies, {...petSpecies, id: 2}]
    findAll(): Pet_species[] {
        return this.petSpecies
    }
    findOne(id: number): Pet_species {
        return this.petSpecies.filter(species => species.id === id)[0]
    }
}
