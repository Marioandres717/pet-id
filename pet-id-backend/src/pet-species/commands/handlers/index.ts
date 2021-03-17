import { CreateOnePetSpeciesHandler } from './create-one-pet-species.handler';
import { PetSpeciesSagaHandler } from './pet-species-saga.handler';

export const CommandHandlers = [
  CreateOnePetSpeciesHandler,
  PetSpeciesSagaHandler,
];
