import { EventStoreDBClient } from '@eventstore/db-client';

const eventStoreProviders = [
  {
    provide: 'EVENT_STORE_CONNECTION',
    useFactory: async () =>
      EventStoreDBClient.connectionString('esdb://localhost:2113?tls=false'),
  },
];

export default eventStoreProviders;
