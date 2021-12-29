import { Link, Navigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useUserLogin } from '../hooks/user/mutations/useUserLogin';
import { Role } from '../interfaces/types';

// interface LoginFormProps{}

export interface LoginForm {
    email: string;
    password: string;
}

export const LoginForm: React.FC = () => {
    const { login, error, role } = useUserLogin()    
    const onFinish = async (dataForm: LoginForm) => {
        const values = {
            email: dataForm.email,
            password: dataForm.password
        }
        login(values)
    }
    //Lưu state -> cookies


    return (
        <div className="card-login-form">
            {role == Role.USER && <Navigate to="/user" replace={true}></Navigate>}
            {role == Role.SELLER && <Navigate to="/seller/view-my-product" replace={true}></Navigate>}
            {role == Role.ADMIN && <Navigate to="/admin" replace={true}></Navigate>}

            {error && <span style={{ color: 'red' }}>Email or password is wrong!!</span>} <br />

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
