import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

// interface LoginFormProps{}

export const LoginForm: React.FC = () => {

    console.log();
    
    const [isUser, setUser] = useState(false)
    const [isSale, setIsSale] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [error, setError] = useState(false)


    const handleSubmitUser = () => {
        setUser(true)
    }

    const handleSubmitAdmin = () => {
        setIsAdmin(true);
    }

    const handleErrorLogin = () => {
        setError(true)
    }
    const handleSubmitSale = () => {
        setIsSale(true)
    }

    interface LoginForm {
        email: string;
        password: string;
    }

    const onFinish = (data: LoginForm) => {
        const values = {
            email: data.email,
            password: data.password
        }
        alert(JSON.stringify(values, null, 2))
    }

    return (
        <div className="card-login-form">
            {isUser && <Navigate to="/user" replace={true}></Navigate>}
            {isSale && <Navigate to="/seller" replace={true}></Navigate>}
            {isAdmin && <Navigate to="/admin" replace={true}></Navigate>}

            {error && <span style={{ color: 'red' }}>Error !!!!!</span>} <br />

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

            <div>
                <button onClick={handleSubmitUser}>SUBMIT (user)</button>
                <button onClick={handleSubmitSale}>SUBMIT (sale)</button>
                <button onClick={handleSubmitAdmin}>SUBMIT (admin)</button>
                <button onClick={handleErrorLogin}>SUBMIT (error)</button>
            </div>

        </div>
    )
}
