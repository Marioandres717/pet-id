import { Module } from '@nestjs/common';
import { PetsMutationResolver } from './pets.mutation.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { Pets, PetsService } from './respository';
import { PetsQueryResolver } from './pets.query.resolver';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Pets])],
  providers: [
    PetsService,
    PetsMutationResolver,
    PetsQueryResolver,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
})
export class PetsModule {}
