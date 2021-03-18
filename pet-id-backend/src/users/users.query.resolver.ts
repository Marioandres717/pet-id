import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Users } from 'src/graphql';
import { GetUserQuery } from './queries/impl/get-user.query';

@Resolver('users')
export class UsersResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query()
  users_by_pk(@Args('id') id: number): Promise<Users> {
    return this.queryBus.execute(new GetUserQuery(id));
  }
}
