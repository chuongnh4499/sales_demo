import { useHistoryOrders } from '../../hooks/user/query/useHistoryOrders';
import { ListOrders } from './list-order';

// interface HistoryOrder{}

export const HistoryOrder: React.FC = () => {

    const { data, isLoading } = useHistoryOrders();

    return (
        <>
            <h2>History Orders</h2>
            <div style={{ width: '55%', display: 'inline-block', textAlign: 'left', marginBottom: 50 }}>
                {data?.data.items.map((order) =>
                    <ListOrders isLoading={isLoading} order={order} key='List-Order' />)}
            </div>
        </>
    )
}
