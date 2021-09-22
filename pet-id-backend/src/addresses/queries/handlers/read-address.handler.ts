import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
// import { serviceService } from 'src/serviceImport/repository/serviceImport.service';
import { ReadAddressQuery } from 'src/addresses/queries/impl/';

@QueryHandler(ReadAddressQuery)
export class queryHandlerHandler implements IQueryHandler<ReadAddressQuery> {
  constructor(
    private foobar: any, // private readonly repository: serviceService,
  ) {}

  async execute(query: ReadAddressQuery) {
    // const { queryProps } = query;
    console.log(`executing address query`);
    // return await this.repository.findOneById(args);
  }
}
