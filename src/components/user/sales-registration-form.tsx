import { RegistrationForm } from '../../interfaces/user';

const formItemLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 },
    },
};
import {
    Form,
    Input,
    Checkbox,
    Button,
} from 'antd';


interface SalesRegistrationFormProps {
    registerToSeller: (values: RegistrationForm) => void;
}

export const SalesRegistrationForm: React.FC<SalesRegistrationFormProps> =
    ({ registerToSeller }: SalesRegistrationFormProps) => {

        const [form] = Form.useForm();


        const onFinish = (values: RegistrationForm) => {
            registerToSeller(values);
        };

        return (
            <>
                <Form
                    layout='vertical'
                    style={{ width: 450 }}
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >

                    <Form.Item
                        name="title"
                        label="Title"
                        tooltip="Please fill in the topic short and easy to understand"
                        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[{ required: true, message: 'Please input Description' }]}
                    >
                        <Input.TextArea rows={4} showCount maxLength={100} />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                            },
                        ]}

                    >
                        <Checkbox style={{ float: 'left', fontSize: '18px' }}>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>
                    
                    <Form.Item>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
