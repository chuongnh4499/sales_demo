import { Drawer, Form, Button, Col, Row, Input, Space } from 'antd';
import { IProduct } from '../interfaces/product';

interface ModalFormProps {
    onClose: () => void;
    visible: boolean;
    productData: IProduct | undefined;
}

export const ModalForm = ({ onClose, visible, productData }: ModalFormProps) => {


    return (
        <>
            <Drawer
                destroyOnClose
                title="Edit a new product"
                width={720}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form
                    layout="vertical"
                    hideRequiredMark
                    initialValues={{
                        ["name"]: productData?.name,
                        ["description"]: productData?.description
                    }}
                >
                    <Row gutter={16}>
                        <Col span={16}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter product name' }]}
                            >
                                <Input
                                    placeholder="Please enter product name"
                                    // value={productData?.name}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={20}>
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter product description',
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    rows={4}
                                    placeholder="please enter product description"
                                    // value={productData?.description}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    )
}
