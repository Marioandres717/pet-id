import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMutationResolver, UserQueryResolver } from './api';
import { User, UsersService } from './repository';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
    UserMutationResolver,
    UserQueryResolver,
    ...CommandHandlers,
    ...QueryHandlers,
  ],
})
export class UsersModule {}
