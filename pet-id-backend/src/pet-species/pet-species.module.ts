import { Module } from '@nestjs/common';
import { PetSpeciesResolver } from './pet-species.resolver';
import { PetSpeciesService } from './pet-species.service';

@Module({
    providers: [PetSpeciesService, PetSpeciesResolver],
})
export class PetSpeciesModule {}
