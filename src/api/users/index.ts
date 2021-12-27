import { IResponse, IResponseAuth } from "../../interfaces/response";
import { IUser } from "../../interfaces/user";
import { LoginForm } from "../../components/login-form";
import { NavigateFunction } from "react-router-dom";
import { instance } from "../server/axios";
import { SignUpForm } from "../../components/signup-form";

export const getAllUsers = async () => {
    const { data } = await instance.get('/user/paginate');
    return data as IResponse<IUser>;
}

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