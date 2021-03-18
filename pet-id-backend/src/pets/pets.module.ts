import { Module } from '@nestjs/common';
import { PetsService } from './respository/pets.service';
import { PetsMutationResolver } from './pets.mutation.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pets } from './respository/pets.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { PetsQueryResolver } from './pets.query.resolver';
import { CommandHandlers } from './commands/handlers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Pets])],
  providers: [
    PetsService,
    PetsMutationResolver,
    PetsQueryResolver,
    ...CommandHandlers,
  ],
})
export class PetsModule {}
