import { useMutation } from "react-query"
import { postProduct } from "../../../api/product";
import { ProductForm } from "../../../components/seller/seller-post";
import { IError } from "../../../interfaces/error";
import { IProduct } from "../../../interfaces/product";
import { IResponseObject } from "../../../interfaces/response";

export const usePostProduct = () => {

    const fetchDataProduct = (productForm: ProductForm) => {
        return postProduct(productForm);
    }

    const postProductSuccess = (responseData: IResponseObject<IProduct>) => {
        alert(JSON.stringify(responseData, null, 2));
    }

    // const postProductError = (error: IError) => {
    //     alert(JSON.stringify(error, null, 2));
    // }

    const { mutate, data } =
        useMutation<IResponseObject<IProduct>, IError, ProductForm>(fetchDataProduct,
            {
                onSuccess: postProductSuccess
                // onError: postProductError
            }
        );

    const addProduct = (productForm: ProductForm) => {
        mutate(productForm);
    }

    return { addProduct, data }
}