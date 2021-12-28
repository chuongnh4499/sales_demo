import { List, Space, Typography } from 'antd';
import { useHistoryOrders } from '../../hooks/user/query/useHistoryOrders';

// interface HistoryOrder{}

export const HistoryOrder: React.FC = () => {

    const { data, isLoading } = useHistoryOrders();

    const dataTest = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    return (
        <>
            <h2>History Orders</h2>
            <div style={{ width: '50%', display: 'inline-block', textAlign: 'left', marginBottom: 50 }}>
                <List
                    loading={isLoading}
                    style={{ backgroundColor: 'white' }}
                    header={<div>Orders</div>}
                    footer={<div>Date: {data?.data.items[0].createdAt} </div>}
                    bordered
                    dataSource={data?.data.items[0].orderDetails}
                    renderItem={item => (
                        <List.Item>
                            <Space>
                                <Typography.Text mark>[{item.product.name}]</Typography.Text>
                                <span>Amount: {item.quantity}</span>
                            </Space>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )
}
