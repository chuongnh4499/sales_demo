import { List, Space, Typography } from "antd"
import { IOrder } from "../../interfaces/order"

interface ListOrderProps {
    order: IOrder;
    isLoading: boolean;
}

export const ListOrders: React.FC<ListOrderProps> = ({ order, isLoading }: ListOrderProps) => {
    return (
        <>
            <List
                key={order.id}
                loading={isLoading}
                style={{ backgroundColor: 'white', marginTop: 16 }}
                header={<div>Orders</div>}
                footer={
                    <div>
                        <span>Date: {order.createdAt}</span>
                        <span style={{ float: 'right' }}>ID: {order.id}</span>
                    </div>}
                bordered
                dataSource={order.orderDetails}
                renderItem={item => (
                    <List.Item>
                        <Space>
                            <Typography.Text mark>[{item.product.name}]</Typography.Text>
                            <span>Amount: {item.quantity}</span>
                        </Space>
                    </List.Item>
                )}
            />
        </>
    )
}
