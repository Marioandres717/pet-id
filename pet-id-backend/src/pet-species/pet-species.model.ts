import { Pets, Pets_aggregate, Pet_species } from "src/graphql";

export class PetSpecies implements Pet_species {
    id: number;
    pets: Pets[];
    pets_aggregate: Pets_aggregate;
    type: string;
    
    constructor(id: number, type: string) {
        this.id = id
        this.type = type
        this.pets = []
        this.pets_aggregate = {
            nodes: []
        }
    }
}