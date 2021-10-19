import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { UsersService } from 'src/user/repository/user.service';
import { GetUserQuery } from '../impl/get-user.query';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly repository: UsersService) {}

  async execute(query: GetUserQuery) {
    const { id } = query;
    return await this.repository.findOneById(id);
  }
}
