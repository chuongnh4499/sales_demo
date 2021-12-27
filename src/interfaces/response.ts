
import { StatusCode } from "./types";
import { IUser } from "./user";

export interface IResponse<T, X> {
    message: string;
    statusCode: StatusCode;
    data: T[];
    meta: X;
}

export interface IResponseAuth {
    publicData: IUser
}

export interface IMutationResult {
    data: IResponseAuth
}
