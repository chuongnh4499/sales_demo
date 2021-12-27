import { useProduct } from '../../hooks/product/query/useProduct';
import { List, Card } from 'antd';

export const ListProducts: React.FC = () => {
    const { data } = useProduct();
    return (
        <div>
            <h2>List Products</h2>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data?.data.items}
                renderItem={value => (
                    <List.Item>
                        <Card style={{borderColor: '#d3d3d3'}} title={value.name}>Card content</Card>
                    </List.Item>
                )}
            />
        </div>
    )
}