import { useMutation, useQueryClient } from "react-query";
import { registerUser } from "../../../api/users";
import { SignUpForm } from "../../../components/signup-form";
import { IError } from "../../../interfaces/error";
import { IResponse } from "../../../interfaces/response";
import { IUser } from "../../../interfaces/user";

export const useUserSignUp = () => {
    const queryClient = useQueryClient();

    const sendDataFormToCheck = (signUpForm: SignUpForm) => {
        return registerUser(signUpForm);
    }

    const SignUpSuccess = (responseData: IResponse<IUser>) => {
        alert(JSON.stringify(responseData, null, 2));
        queryClient.setQueryData(['register-info-success', responseData], data);
    }

    const { mutate, data } =
        useMutation<IResponse<IUser>, IError, SignUpForm>(sendDataFormToCheck, {
            onSuccess: SignUpSuccess
        })


    const signup = (signUpForm: SignUpForm) => {
        mutate(signUpForm)
    }

    return { signup, data };
}