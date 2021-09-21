import {
  AllStreamResolvedEvent,
  AppendResult,
  EventData,
  EventStoreDBClient,
  EventType,
  FORWARDS,
  ResolvedEvent,
  START,
  StreamingRead,
} from '@eventstore/db-client';
import {
  AppendToStreamOptions,
  ReadAllOptions,
  ReadStreamOptions,
} from '@eventstore/db-client/dist/streams';

interface IEventStoreProviders {
  connection: EventStoreDBClient;
  readAll(
    eventStoreClient: EventStoreDBClient,
    options?: ReadAllOptions,
  ): Promise<StreamingRead<AllStreamResolvedEvent>>;
  readStream(
    eventStoreClient: EventStoreDBClient,
    streamName: string,
    options?: ReadStreamOptions,
  ): Promise<StreamingRead<ResolvedEvent<EventType>>>;
  appendToStream(
    eventStoreClient: EventStoreDBClient,
    streamName: string,
    events: EventData | EventData[],
    options?: AppendToStreamOptions,
  ): Promise<AppendResult>;
}

const eventStoreProviders = [
  {
    provide: 'EVENT_STORE_CONNECTION',
    useFactory: async (): Promise<IEventStoreProviders> => {
      const connection = await EventStoreDBClient.connectionString(
        'esdb://localhost:2113?tls=false',
      );

      async function readAll(
        eventStoreClient: EventStoreDBClient,
        options: ReadAllOptions = {
          direction: FORWARDS,
          fromPosition: START,
          maxCount: 1000,
        },
      ): Promise<StreamingRead<AllStreamResolvedEvent>> {
        return await eventStoreClient.readAll(options);
      }

      async function readStream(
        eventStoreClient: EventStoreDBClient,
        streamName: string,
        options: ReadStreamOptions = {
          direction: FORWARDS,
          fromRevision: START,
          maxCount: 100,
        },
      ): Promise<StreamingRead<ResolvedEvent<EventType>>> {
        return await eventStoreClient.readStream(streamName, options);
      }

      async function appendToStream(
        eventStoreClient: EventStoreDBClient,
        streamName: string,
        events: EventData | EventData[],
        options?: AppendToStreamOptions,
      ): Promise<AppendResult> {
        return await eventStoreClient.appendToStream(
          streamName,
          events,
          options,
        );
      }

      return { connection, readAll, readStream, appendToStream };
    },
  },
];

export { eventStoreProviders, IEventStoreProviders };
