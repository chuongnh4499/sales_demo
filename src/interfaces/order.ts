import { IBase } from "./base";
import { IOrderDetails } from "./order-details";
import { IUser } from "./user";

export interface IOrder extends IBase{

    user: IUser;
    orderDetails: Array<IOrderDetails>;
    
}