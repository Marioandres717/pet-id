
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface RegisterUserInput {
    email: string;
    name?: string;
}

export interface User {
    id: number;
    authId: string;
    email: string;
    name?: string;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
    userByPK(pk: number): User | Promise<User>;
}

export interface IMutation {
    registerUser(input: RegisterUserInput): User | Promise<User>;
}
