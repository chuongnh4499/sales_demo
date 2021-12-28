import { IBase } from "./base";
import { IOrderDetails } from "./order-details";
import { IUser } from "./user";

export interface IProduct extends IBase {
    name: string;
    description: string;
    user: IUser;
    orderDetails: IOrderDetails[];
}

