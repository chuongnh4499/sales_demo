import { List, Space, Typography } from 'antd';
import { useHistoryOrders } from '../../hooks/user/query/useHistoryOrders';

// interface HistoryOrder{}

export const HistoryOrder: React.FC = () => {

    const { data, isLoading } = useHistoryOrders();

    return (
        <>
            <h2>History Orders</h2>
            <div style={{ width: '50%', display: 'inline-block', textAlign: 'left', marginBottom: 50 }}>
                {data?.data.items.map((order) => <List
                    key={order.id}
                    loading={isLoading}
                    style={{ backgroundColor: 'white', marginTop: 16 }}
                    header={<div>Orders</div>}
                    footer={
                        <div>
                                <span>Date: {order.createdAt}</span>
                                <span style={{float: 'right'}}>ID: {order.id}</span>
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
                />)}

            </div>
        </>
    )
}
