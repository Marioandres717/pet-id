import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { PetSpeciesCreatedEvent } from '../impl/pet-species-created.event';

@EventsHandler(PetSpeciesCreatedEvent)
export class PetSpeciesCreatedHandler
  implements IEventHandler<PetSpeciesCreatedEvent> {
  handle(event: PetSpeciesCreatedEvent) {
    const ts = Date.now();
    console.log(
      clc.green('[EVENT] Pet Species Created', Math.floor(ts / 1000)),
    );
  }
}
