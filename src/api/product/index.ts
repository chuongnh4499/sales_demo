import { ProductForm } from "../../components/seller/seller-post";
import { IProduct } from "../../interfaces/product";
import { IResponse, IResponseProduct } from "../../interfaces/response";
import { instance } from "../server/axios"

export const getProduct = async () => {
    const { data } = await instance.get('/product/public');

    return data as IResponse<IProduct>;
}

export const postProduct = async (productForm: ProductForm) => {

    const valuesForm = {
        name: productForm.name,
        description: productForm.description
    }

    const {data} = await instance.post('/product', valuesForm);


    return data as IResponseProduct<IProduct>;
}