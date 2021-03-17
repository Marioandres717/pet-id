import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetSpecies } from './repository/pet-species.entity';
import { PetSpeciesQueryResolver } from './pet-species.query.resolver';
import { PetSpeciesService } from './repository/pet-species.service';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryHandlers } from './queries/handlers';
import { PetSpeciesMutationResolver } from './pet-species.mutation.resolver';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { PetSpeciesSagas } from './sagas/pet-species.sagas';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([PetSpecies])],
  providers: [
    PetSpeciesQueryResolver,
    PetSpeciesMutationResolver,
    ...QueryHandlers,
    ...CommandHandlers,
    ...EventHandlers,
    PetSpeciesSagas,
    PetSpeciesService,
  ],
})
export class PetSpeciesModule {}
