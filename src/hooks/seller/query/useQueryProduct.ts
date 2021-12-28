import { useQuery } from "react-query";
import { getSellerProduct } from "../../../api/seller";

export const useQueryProduct = () => {
    const { data, isLoading } = useQuery('list-products-seller', getSellerProduct);

    return { data, isLoading };
}