import { IMutationResult, IResponse, IResponseAuth } from "../../interfaces/response";
import { IUser } from "../../interfaces/user";
import { LoginForm } from "../../components/login-form";
import { NavigateFunction } from "react-router-dom";
import { instance } from "../server/axios";

export const getUser = async () => {
    const response: IResponse<IUser> = await instance.get('/users');
    return response;
}

export const checkLogin = async (dataForm: LoginForm, callback?: NavigateFunction) => {


    const { data } = await instance.post('/auth', dataForm);

    //sau khi auth thành công
    //gọi callback
    //nếu data role = user
    // callback("/user")

    return data as IResponseAuth;
}