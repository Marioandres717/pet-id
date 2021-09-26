import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AddressesService } from 'src/addresses/repository/addresses.service';
import { RegisterAddressCommand } from '../impl';

@CommandHandler(RegisterAddressCommand)
export class RegisterAddressHandler
  implements ICommandHandler<RegisterAddressCommand> {
  constructor(
    private readonly service: AddressesService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: RegisterAddressCommand) {
    const { address } = command;
    await this.service.registerAddress(address);
    // return this.publisher.mergeObjectContext(
    //   await this.repository.create(address),
    // );
  }
}
