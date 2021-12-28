import { IProduct } from "../../interfaces/product";
import { IResponse } from "../../interfaces/response";
import { instance } from "../server/axios"

export const getSellerProduct = async () => {

    const {data} = await instance.get('/product');


    return data as IResponse<IProduct>;
}