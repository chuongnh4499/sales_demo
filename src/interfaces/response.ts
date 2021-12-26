
import { StatusCode } from "./types";
import { IUser } from "./user";

export interface IResponse<T> {
    message: string;
    statusCode: StatusCode;
    data: T[];
}

export interface IResponseAuth {
    publicData: IUser
}

export interface IMutationResult {
    data: IResponseAuth
}
