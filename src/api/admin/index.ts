import { IResponse } from "../../interfaces/response";
import { IUser, RegistrationForm } from "../../interfaces/user";
import { instance } from "../server/axios";

export const getAllUsers = async () => {
    const { data } = await instance.get('/user/paginate');
    return data as IResponse<IUser>;
}

export const getAllFormUsers = async () => {
    const { data } = await instance.get('/form/admin');

    return data as IResponse<RegistrationForm>;
}

// export const updateStatusForm = async () => {
//     const {} = await instance.patch(`/form/admin/`);
// }
