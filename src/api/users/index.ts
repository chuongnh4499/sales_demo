import { IMutationResult, IResponse } from "../../interfaces/response";
import { IUser } from "../../interfaces/user";
import { LoginForm } from "../../components/login-form";
import { NavigateFunction } from "react-router-dom";
import { instance } from "../server/axios";

export const getUser = async () => {
    const response: IResponse<IUser> = await instance.get('/users');
    return response;
}

export const checkLogin = async (data: LoginForm, callback?: NavigateFunction) => {


    const response: IMutationResult = await instance.post('/auth', data);

    //sau khi auth thành công
    //gọi callback
    //nếu data role = user
    // callback("/user")

    return response;
}