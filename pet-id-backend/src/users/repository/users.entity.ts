import { AggregateRoot } from '@nestjs/cqrs';
import {
  Addresses,
  Images,
  Users as IUsers,
  User_browsers,
  User_pets,
  User_Pets_aggregate,
} from 'src/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users extends AggregateRoot implements IUsers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  authId: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  constructor() {
    super();
  }

  Address?: Addresses;
  AddressId?: number;
  avatar?: Images;
  avatarId?: number;
  user_browser?: User_browsers;
  user_pets: User_pets[];
  User_Pets_aggregate: User_Pets_aggregate;
}
