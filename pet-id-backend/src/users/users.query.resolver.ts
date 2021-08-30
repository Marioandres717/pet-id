import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Users } from 'src/graphql';
import { GetAllUsersQuery, GetUserQuery } from './queries/impl/';

@Resolver('users')
export class UsersResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query()
  users_by_pk(@Args('id') id: number): Promise<Users> {
    return this.queryBus.execute(new GetUserQuery(id));
  }

  @Query()
  users(): Promise<Users[]> {
    return this.queryBus.execute(new GetAllUsersQuery());
  }
}
