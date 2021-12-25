import { IBase } from "./base";

import { RoleType } from "./types"; 

export interface IUser extends IBase {

    name: string;
    age: number;
    email: string;
    role: RoleType;

}
