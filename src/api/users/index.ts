import axios from "axios";
import { IMutationResult, IResponse, IResponseAuth } from "../../interfaces/response";
import { IUser } from "../../interfaces/user";
import { BaseURL } from "../base-url";
import { LoginForm } from "../../components/login-form";

const { FAKE_API, PROJECT_API } = BaseURL;

const instance = axios.create({ baseURL: PROJECT_API });

export const getUser = async () => {
    const response: IResponse<IUser> = await instance.get('/users');
    return response;
}

export const checkLogin = async (data: LoginForm) => {

    const response: IMutationResult = await instance.post('/auth', data);

    return response;
}