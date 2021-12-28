import { useQuery } from "react-query"
import { getHistoryOrders } from "../../../api/users"

export const useHistoryOrders = () => {
    const { data, isLoading } = useQuery('get-history-orders', getHistoryOrders);

    return { data, isLoading };
}