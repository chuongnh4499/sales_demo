import { IProduct } from "../../interfaces/product";
import { IResponse } from "../../interfaces/response";
import { instance } from "../server/axios"

export const getProduct = async () => {
    const { data } = await instance.get('/product/public');

    return data as IResponse<IProduct>;
}