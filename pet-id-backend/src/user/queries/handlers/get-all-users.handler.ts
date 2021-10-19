import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UsersService } from 'src/user/repository';
import { GetAllUsersQuery } from '../impl/get-all-users.query';

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersHandler implements IQueryHandler<GetAllUsersQuery> {
  constructor(private readonly repository: UsersService) {}

  async execute(query: GetAllUsersQuery) {
    return await this.repository.findAll();
  }
}
