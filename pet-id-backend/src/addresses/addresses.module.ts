import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventStoreModule } from 'src/event-store/event-store.module';
import { AddressesMutationResolver } from './addresses.mutation.resolver';
import { AddressesQueryResolver } from './addresses.query.resolver';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers';
import { AddressesService } from './repository/addresses.service';

@Module({
  imports: [CqrsModule, EventStoreModule],
  providers: [
    AddressesService,
    ...CommandHandlers,
    ...QueryHandlers,
    AddressesMutationResolver,
    AddressesQueryResolver,
  ],
})
export class AddressesModule {}
