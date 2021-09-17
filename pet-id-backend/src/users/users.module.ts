import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersMutationResolver } from './users.mutation.resolver';
import { Users } from './repository';
import { UsersService } from './repository';
import { CommandHandlers } from './commands/handlers';
import { UsersQueryResolver } from './users.query.resolver';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Users])],
  providers: [
    UsersService,
    UsersMutationResolver,
    UsersQueryResolver,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
})
export class UsersModule {}
