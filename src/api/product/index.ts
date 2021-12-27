import { IMetaProduct, IProduct } from "../../interfaces/product";
import { IResponse } from "../../interfaces/response";
import { instance } from "../server/axios"

export const getProduct = async () => {
    const response: IResponse<IProduct, IMetaProduct> = await instance.get('/product/public');

    return response;
}