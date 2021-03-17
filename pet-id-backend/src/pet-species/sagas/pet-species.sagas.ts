import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PetSpeciesSagaCommand } from '../commands/impl/pet-species-saga.command';
import { PetSpeciesCreatedEvent } from '../events/impl/pet-species-created.event';

@Injectable()
export class PetSpeciesSagas {
  @Saga()
  petSpeciesCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(PetSpeciesCreatedEvent),
      delay(1000),
      map((event) => new PetSpeciesSagaCommand()),
    );
  };
}
