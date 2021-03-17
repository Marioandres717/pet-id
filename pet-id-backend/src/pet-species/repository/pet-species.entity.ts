import { AggregateRoot } from '@nestjs/cqrs';
import { Pets, Pets_aggregate, Pet_species } from 'src/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PetSpeciesCreatedEvent } from '../events/impl/pet-species-created.event';

@Entity()
export class PetSpecies extends AggregateRoot implements Pet_species {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  type: string;

  pets: Pets[];
  pets_aggregate: Pets_aggregate;

  constructor(id: number, type: string) {
    super();
    this.id = id;
    this.type = type;
  }

  petSpeciesCreated() {
    this.apply(new PetSpeciesCreatedEvent());
  }
}
