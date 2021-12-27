import { IBase } from "./base";
import { IOrderDetails } from "./order-details";

export interface IProduct extends IBase {
    name: string;
    description: string;
    orderDetails: IOrderDetails[];
}
