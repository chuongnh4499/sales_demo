import { useQuery } from "react-query";
import { getAllUsers } from "../../../api/users";

export const useQueryUser = () => {
    const { data, isLoading } = useQuery('get-all-users', getAllUsers);

    return { data, isLoading };
}