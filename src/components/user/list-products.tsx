import { useProduct } from '../../hooks/product/query/useProduct';
import { List, Card, Button } from 'antd';
import { useStore } from '../../context/user';
import { IProduct } from '../../interfaces/product';

export const ListProducts: React.FC = () => {
    const { data } = useProduct();

    const { cart, setCart } = useStore()

    const handleAddToCart = (valueProduct: IProduct) => {
        const newItem = {
            id: valueProduct.id,
            name: valueProduct.name,
            description: valueProduct.description,
            quantity: 1
        }
        //find item is exist return item
        const exist = cart.items.find((item) => item.id === newItem.id);

        //if exist item, update quantity(+1) else add new item to cart
        if (exist) {
            setCart(
                {
                    items: cart.items.map((x) =>
                        x.id === newItem.id ? { ...exist, quantity: exist.quantity + 1 } : x
                    )
                }
            )
        } else {
            setCart({ items: [...cart.items, { ...newItem, quantity: 1 }] })
        }

    }

    return (
        <div>
            <h2>List Products</h2>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data?.data.items}
                renderItem={value => (
                    <List.Item>
                        <Card
                            style={{ borderColor: '#d3d3d3' }}
                            title={value.name}
                            actions={[<Button key="AddToCart" onClick={() => handleAddToCart(value)} shape='round' type='primary'>Add to cart</Button>]}
                        >
                            {value.description}
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    )
}