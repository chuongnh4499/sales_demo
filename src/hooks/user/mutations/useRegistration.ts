import { useMutation } from "react-query";
import { registerForm } from "../../../api/users";
import { IError } from "../../../interfaces/error";
import { StatusCode } from "../../../interfaces/types";
import { RegistrationForm } from "../../../interfaces/user";

export const useRegistration = () => {

    const fetchDataFormToRegistration = (registrationForm: RegistrationForm) => {
        return registerForm(registrationForm);
    }

    const registerSuccess = (responseStatus: StatusCode) => {
        if (responseStatus === StatusCode.CREATED)
            alert(JSON.stringify('Registration is successful, form has been sent', null, 2));
    }

    const { mutate, isSuccess,  } =
        useMutation<StatusCode, IError, RegistrationForm>(fetchDataFormToRegistration,
            {
                onSuccess: registerSuccess
            });

    const registerToSeller = (registrationForm: RegistrationForm) => {
        mutate(registrationForm);
    }

    return { registerToSeller, isSuccess }
}