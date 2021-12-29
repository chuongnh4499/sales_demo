import { IResponse, IResponseAuth, IResponseObject, IResponseForm } from "../../interfaces/response";
import { IUser, RegistrationForm } from "../../interfaces/user";
import { LoginForm } from "../../components/login-form";
import { NavigateFunction } from "react-router-dom";
import { instance } from "../server/axios";
import { SignUpForm } from "../../components/signup-form";
import { ICartRequest } from "../../interfaces/request";
import { IOrder } from "../../interfaces/order";
import { StatusCode } from "../../interfaces/types";

export const checkLogin = async (dataForm: LoginForm, callback?: NavigateFunction) => {
    const { data } = await instance.post('/auth', dataForm);

    //sau khi auth thành công
    //gọi callback
    //nếu data role = user
    // callback("/user")

    return data as IResponseAuth;
}

export const registerUser = async (signUpForm: SignUpForm) => {
    const { data } = await instance.post('/user', signUpForm);

    return data as IResponse<IUser>;
}

export const registerForm = async (registrationForm: RegistrationForm) => {

    const request = {
        title: registrationForm.title,
        description: registrationForm.description
    }

    const { status } = await instance.post('/form', request);

    return status;
}

export const checkOut = async (cart: ICartRequest) => {

    const { status } = await instance.post('/order', cart);

    return status;
}

export const getHistoryOrders = async () => {

    const { data } = await instance.get('/order');

    return data as IResponse<IOrder>;
}

export const getFormUser = async () => {

    const { data } = await instance.get('/form');

    return data as IResponseObject<IResponseForm>;
}

export const cancelFormUser = async (idForm: string | undefined) => {

    const { status } = await instance.delete(`/form/${idForm}`);

    return status ;
}
