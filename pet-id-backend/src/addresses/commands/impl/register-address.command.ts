import { Addresses } from 'src/addresses/repository';
import { Addresses_insert_input } from 'src/graphql';

export class RegisterAddressCommand {
  constructor(readonly address: Addresses_insert_input) {}
}
