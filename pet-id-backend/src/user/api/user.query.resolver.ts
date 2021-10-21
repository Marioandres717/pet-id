import { QueryBus } from '@nestjs/cqrs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/new-graphql';
import { GetAllUsersQuery, GetUserQuery } from '../queries/impl';

@Resolver('user')
export class UserQueryResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query()
  userByPK(@Args('pk') pk: number): Promise<User> {
    return this.queryBus.execute(new GetUserQuery(pk));
  }

  @Query()
  users(): Promise<User[]> {
    return this.queryBus.execute(new GetAllUsersQuery());
  }
}
