import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { PetSpeciesSagaCommand } from '../impl/pet-species-saga.command';

@CommandHandler(PetSpeciesSagaCommand)
export class PetSpeciesSagaHandler
  implements ICommandHandler<PetSpeciesSagaCommand> {
  execute(command: PetSpeciesSagaCommand) {
    const ts = Date.now();
    console.log(clc.red(`${command.message} ${Math.floor(ts / 1000)}`));
    return Promise.resolve(undefined);
  }
}
