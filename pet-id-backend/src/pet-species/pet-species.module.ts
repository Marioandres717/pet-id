import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetSpeciesQueryResolver } from './pet-species.query.resolver';
import { CqrsModule } from '@nestjs/cqrs';
import { PetSpecies, PetSpeciesService } from './repository';
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
