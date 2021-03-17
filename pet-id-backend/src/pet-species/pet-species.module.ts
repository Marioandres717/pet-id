import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetSpecies } from './repository/pet-species.entity';
import { PetSpeciesResolver } from './pet-species.resolver';
import { PetSpeciesService } from './repository/pet-species.service';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([PetSpecies])],
  providers: [PetSpeciesResolver, PetSpeciesService, ...QueryHandlers],
})
export class PetSpeciesModule {}
