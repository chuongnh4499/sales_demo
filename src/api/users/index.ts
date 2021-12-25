import axios from "axios";
import { IResponse } from "../../interfaces/response";
import { IUser } from "../../interfaces/user";
import { BaseURL } from "../base-url";

const { FAKE_API } = BaseURL;

const instance = axios.create({ baseURL: FAKE_API });

export const getUser = async () => {
    const response: IResponse<IUser> = await instance.get('/users');
    return response;
}