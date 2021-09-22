import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventStoreModule } from 'src/event-store/event-store.module';
import { AddressesMutationResolver } from './addresses.mutation.resolver';
import { CommandHandlers } from './commands/handlers';
import { AddressesService } from './repository/addresses.service';

@Module({
  imports: [CqrsModule, EventStoreModule],
  providers: [AddressesService, ...CommandHandlers, AddressesMutationResolver],
})
export class AddressesModule {}
