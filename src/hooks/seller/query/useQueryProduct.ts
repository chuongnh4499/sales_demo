import { useQuery } from "react-query";
import { getSellerProduct } from "../../../api/seller";

export const useQueryProduct = (page: number) => {

    const { data, isLoading } = useQuery(['list-products-seller', page], () => getSellerProduct(page));

    return { data, isLoading };
}