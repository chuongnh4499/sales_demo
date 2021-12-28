import { IBase } from "./base";

import { Role } from "./types"; 

export interface IUser extends IBase {

    name: string;
    age: number;
    email: string;
    password: string;
    role: Role;

}

export interface RegistrationForm extends IBase {
    title: string;
    description: string;
}
