interface ICreateOnePetCommandProps {
  name: string;
  description: string;
  species: number;
  avatar?: number;
}

export class CreateOnePetCommand {
  constructor(readonly properties: ICreateOnePetCommandProps) {}
}
