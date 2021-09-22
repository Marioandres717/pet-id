import { jsonEvent } from '@eventstore/db-client';
import { Inject, Injectable } from '@nestjs/common';
import { IEventStoreProviders } from 'src/event-store/event-store.providers';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AddressesService {
  STREAM_NAME = 'user-addresses';

  constructor(
    @Inject('EVENT_STORE_CONNECTION') private eventStore: IEventStoreProviders,
  ) {}

  async registerAddress(address): Promise<any> {
    const event = jsonEvent({
      id: uuid(),
      type: 'register-address',
      data: address,
    });

    const result = await this.eventStore.appendToStream(
      this.eventStore.connection,
      this.STREAM_NAME,
      event,
    );

    return result;
  }
}
