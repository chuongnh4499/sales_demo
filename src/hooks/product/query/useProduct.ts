import { useQuery } from "react-query";
import { getProduct } from "../../../api/product";

export const useProduct = () => {
    const { data } = useQuery('list-products-public', getProduct)

    return { data };
}