import { Pets, Pets_aggregate, Pet_species } from 'src/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PetSpecies implements Pet_species {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  type: string;

  pets: Pets[];
  pets_aggregate: Pets_aggregate;

  constructor(id: number, type: string) {
    this.id = id;
    this.type = type;
    this.pets = [];
    this.pets_aggregate = {
      nodes: [],
    };
  }
}
