import { useQuery } from "react-query"
import { getFormUser } from "../../../api/users"

export const useForm = () => {
    const { data, isLoading } = useQuery('user-form-register', getFormUser);

    return { data, isLoading };
}