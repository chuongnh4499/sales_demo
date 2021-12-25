import { Form, Input, InputNumber, Button } from 'antd';

// interface SellerPostProps{}

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 17 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export const SellerPost: React.FC = () => {

    const onFinish = (values: any) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <div>
            <h2>Sale Post</h2>
            <div className="card-seller-post">
                <Form {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                    className="seller-post-form"
                >
                    <Form.Item
                        name={['product', 'name']}
                        label="Name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['product', 'quantity']}
                        label="Quantity"
                        rules={[{ type: 'number', min: 0, max: 99, required: true }]}
                    >
                        <InputNumber style={{ float: 'left' }} />
                    </Form.Item>
                    <Form.Item name={['product', 'description']} label="Description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                        <Button style={{ width: '100%' }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

