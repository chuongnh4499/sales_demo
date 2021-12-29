
import { IBase } from "./base";
import { StatusCode } from "./types";
import { IUser, RegistrationForm } from "./user";

export interface IResponse<T> extends IMeTaLink {
    message: string;
    statusCode: StatusCode;
    data: IItems<T>;
}

export interface IResponseObject<T> extends IBase {
    message: string;
    statusCode: StatusCode;
    data: T;
}

export interface IItems<X> extends IMeTaLink {
    items: X[];
}

export interface IMeTaLink {
    meta: IMeta;
    link: ILink;
}

export interface IMeta {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number
}

export interface ILink {
    first: string,
    previous: string,
    next: string,
    last: string
}

export interface IResponseAuth {
    publicData: IUser
}

export interface IResponseForm extends IUser {
    form: RegistrationForm;
}

