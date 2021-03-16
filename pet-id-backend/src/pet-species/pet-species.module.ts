import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetSpecies } from './pet-species.entity';
import { PetSpeciesResolver } from './pet-species.resolver';
import { PetSpeciesService } from './pet-species.service';

@Module({
  imports: [TypeOrmModule.forFeature([PetSpecies])],
  providers: [PetSpeciesService, PetSpeciesResolver],
})
export class PetSpeciesModule {}
