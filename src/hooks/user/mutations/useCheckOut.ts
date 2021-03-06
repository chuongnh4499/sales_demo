import { useMutation } from "react-query";
import { checkOut } from "../../../api/users";
import { IError } from "../../../interfaces/error";
import { ICartRequest } from "../../../interfaces/request";
import { StatusCode } from "../../../interfaces/types";

export const useCheckOut = () => {

    const fetchDataOrder = (cart: ICartRequest) => {
        return checkOut(cart);
    }

    const checkOutSuccess = (responseStatus: StatusCode) => {
        if (responseStatus === StatusCode.CREATED)
            alert('SUCCESS');
    }

    const { mutate, isSuccess } =
        useMutation<StatusCode, IError, ICartRequest>(fetchDataOrder,
            {
                onSuccess: checkOutSuccess,
                mutationKey: 'asd'
            }
        )

    const submitOrder = (cart: ICartRequest) => {
        mutate(cart)
    }

    return { submitOrder, isSuccess };
}