import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetSpecies } from './repository/pet-species.entity';
import { PetSpeciesResolver } from './pet-species.resolver';
import { PetSpeciesService } from './repository/pet-species.service';
import { CqrsModule } from '@nestjs/cqrs';
import { PetSpeciesSagas } from './sagas/pet-species.sagas';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([PetSpecies])],
  providers: [
    PetSpeciesResolver,
    PetSpeciesService,
    PetSpeciesSagas,
    ...QueryHandlers,
  ],
})
export class PetSpeciesModule {}
