import { IBase } from "./base";
import { IOrderDetails } from "./order-details";

export interface IItems extends IBase {
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

export interface IProduct {
    items: IItems[];
    meta: IMetaProduct;
}