import { AggregateRoot } from '@nestjs/cqrs';
import { Addresses as IAddresses, Users } from 'src/graphql';

export class Addresses extends AggregateRoot implements IAddresses {
  id: number;
  city: string;
  country: string;
  line_1: string;
  other_Address_details?: string;
  phone?: string;
  province_or_state: string;
  user: Users;
  userById?: Users;
  userId: number;
  zip_or_postcode: string;
}
