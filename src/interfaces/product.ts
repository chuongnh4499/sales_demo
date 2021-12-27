import { IBase } from "./base";
import { IOrderDetails } from "./order-details";


export interface IProduct extends IBase {
    name: string;
    description: string;
    orderDetails: IOrderDetails[];
}

export interface IMetaProduct {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number
}