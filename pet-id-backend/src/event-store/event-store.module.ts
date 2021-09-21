import { Module } from '@nestjs/common';
import { eventStoreProviders } from './event-store.providers';

@Module({
  providers: [...eventStoreProviders],
  exports: [...eventStoreProviders],
})
export class EventStoreModule {}
