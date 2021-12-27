import { Form, Input, Button, InputNumber } from 'antd';
import { useUserSignUp } from '../hooks/user/mutations/useUserSignUp';
import { Role } from '../interfaces/types';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 17 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!'
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export interface SignUpForm {
    name: string;
    age: number;
    email: string;
    password: string;
}

export const SignUpForm: React.FC = () => {

    const { signup } = useUserSignUp();

    const onFinish = (values: SignUpForm) => {
        const signUpForm = {
            name: values.name,
            age: values.age,
            email: values.email,
            password: values.password,
            role: Role.USER
        }
        signup(signUpForm)
    };

    return (
        <div className="card-signup-form">
            <Form {...layout}
                className="signup-form"
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="age" label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber style={{ float: 'left' }} />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]} hasFeedback>
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Confirm"
                    dependencies={['user', 'password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
                    <Button className="login-form-button" type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}
