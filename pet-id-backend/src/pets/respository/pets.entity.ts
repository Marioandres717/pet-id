import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Generated,
  JoinColumn,
} from 'typeorm';
import { PetSpecies } from 'src/pet-species/repository/pet-species.entity';
import { AggregateRoot } from '@nestjs/cqrs';
import {
  Images,
  Pets as IPets,
  User_pets,
  User_Pets_aggregate,
} from 'src/graphql';

@Entity()
export class Pets extends AggregateRoot implements IPets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  @Generated('uuid')
  uuid: string;

  @ManyToOne(() => PetSpecies, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'species' })
  pet_species: PetSpecies;

  constructor() {
    super();
  }
  avatar?: Images;
  avatarId?: number;
  species: number;
  user_pets: User_pets[];
  User_Pets_aggregate: User_Pets_aggregate;
}
