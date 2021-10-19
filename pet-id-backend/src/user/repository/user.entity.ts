import { AggregateRoot } from '@nestjs/cqrs';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface IUser {
  id: number;
  authId: string;
  name: string;
  email: string;
}

@Entity()
export class User extends AggregateRoot implements IUser {
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

  // Address?: Addresses;
  // AddressId?: number;
  // avatar?: Images;
  // avatarId?: number;
  // user_browser?: User_browsers;
  // user_pets: User_pets[];
  // User_Pets_aggregate: User_Pets_aggregate;
}
