import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Role } from '../interfaces/types';
import { checkLogin } from '../api/users';
import { useMutation, useQueryClient } from 'react-query';
import { IMutationResult, IResponseAuth } from '../interfaces/response';
import { IError } from '../interfaces/error';

// interface LoginFormProps{}

export interface LoginForm {
    email: string;
    password: string;
}

export const LoginForm: React.FC = () => {
    const [role, setRole] = useState<Role>(Role.USER)
    
    const queryClient = useQueryClient()

    const { mutate, isLoading, isError, isSuccess, data, error } =
        useMutation<IMutationResult, IError, LoginForm>((dataForm) => {
            return checkLogin(dataForm)
        }, {
            onSuccess: (responseData) => {
                alert(JSON.stringify(responseData.data, null, 2));
                queryClient.setQueryData(['userInfo', responseData.data], data)
                setUserAuthor(responseData.data)
            }
        })


    const onFinish = async (dataForm: LoginForm) => {
        const values = {
            email: dataForm.email,
            password: dataForm.password
        }
        mutate(values)
    }

    const setUserAuthor = (myData: IResponseAuth) => {
        const roleResponse = myData?.publicData.role

        if (roleResponse === Role.ADMIN) {
            setRole(Role.ADMIN)
        } else if (roleResponse === Role.SELLER) {
            setRole(Role.SELLER)
        }
    }


    return (
        <div className="card-login-form">
            {/* {role && <Navigate to="/user" replace={true}></Navigate>}
            {isSale && <Navigate to="/seller" replace={true}></Navigate>}
            {isAdmin && <Navigate to="/admin" replace={true}></Navigate>} */}

            {error && <span style={{ color: 'red' }}>{error.toString()} !!!!!</span>} <br />

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="E-mail" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox style={{ float: 'left' }}>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <span>Or <Link to="/signup">register now!</Link></span>
                </Form.Item>
            </Form>
        </div>
    )
}
