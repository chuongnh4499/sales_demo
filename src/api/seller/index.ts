import { IProduct } from "../../interfaces/product";
import { IResponse } from "../../interfaces/response";
import { instance } from "../server/axios"

export const getSellerProduct = async (page: number) => {

    const { data } = await instance.get(`/product?num=${page}`);


    return data as IResponse<IProduct>;
}