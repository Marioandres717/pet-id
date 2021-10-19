export class CreateUserCommand {
  constructor(
    readonly name: string,
    readonly authId: string,
    readonly email: string,
  ) {}
}
