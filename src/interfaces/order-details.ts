import { IBase } from "./base";
import { IOrder } from "./order";
import { IProduct } from "./product";

export interface IOrderDetails extends IBase {
    
    quantity: number;
    product: IProduct;
    order: IOrder;
    
}
