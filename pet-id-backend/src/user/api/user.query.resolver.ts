import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Users } from 'src/graphql';
import { GetAllUsersQuery, GetUserQuery } from '../queries/impl';

@Resolver('users')
export class UserQueryResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query()
  userByPK(@Args('pk') pk: number): Promise<Users> {
    return this.queryBus.execute(new GetUserQuery(pk));
  }

  @Query()
  users(): Promise<Users[]> {
    return this.queryBus.execute(new GetAllUsersQuery());
  }
}
