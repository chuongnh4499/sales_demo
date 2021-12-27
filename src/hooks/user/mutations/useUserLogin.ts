import { useMutation, useQueryClient } from 'react-query';
import { IResponseAuth } from '../../../interfaces/response';
import { LoginForm } from '../../../components/login-form'
import { IError } from '../../../interfaces/error';
import { checkLogin } from '../../../api/users';
import { useState } from 'react';
import { Role } from '../../../interfaces/types';


export const useUserLogin = () => {
    const queryClient = useQueryClient();
    const [role, setRole] = useState<Role>()
    const { mutate, isLoading, isError, isSuccess, data, error } =
        useMutation<IResponseAuth, IError, LoginForm>((dataForm) => {
            return checkLogin(dataForm)
        }, {
            onSuccess: (responseData) => {

                alert(JSON.stringify(responseData, null, 2));

                queryClient.setQueryData(['userInfo', responseData], data)

                setRole(responseData.publicData.role)
            }
        });

    return { mutate, isLoading, isError, isSuccess, data, error, role };
};