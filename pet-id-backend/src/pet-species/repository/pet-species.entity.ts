import { Pets, Pets_aggregate, Pet_species } from 'src/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PetSpecies implements Pet_species {
  @PrimaryColumn()
  id: number;

  @Column()
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
