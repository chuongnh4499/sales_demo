
import { StatusCode } from "./types";
import { IUser } from "./user";

export interface IResponse<T> {
    message: string;
    statusCode: StatusCode;
    data: IItems<T>;
}

export interface IItems<X> {
    items: X[];
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
