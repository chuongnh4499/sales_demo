import { Button, Card, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cart-context';
import { useCheckOut } from '../../hooks/user/mutations/useCheckOut';
import { ButtonCheckOut } from './button-checkout';
import { CartProduct } from './cart-product';

// interface CartProps{}

export const Cart: React.FC = () => {

    const navigate = useNavigate();
    const { cart, setCart } = useCartContext();
    const { submitOrder } = useCheckOut();

    const handleCheckOut = () => {
        //get items form cart to checkout
        const values = {
            items: cart.items.map((item) => {
                return {
                    id: item.id,
                    quantity: item.quantity
                }
            })
        }
        //checkout
        submitOrder(values);

        //set cart default
        setCart({ items: [] });
    }

    return (
        <>
            <h2>Cart</h2>
            <div style={{ width: '70%', display: 'inline-block', textAlign: 'left', marginBottom: 50 }}>
                <Card
                    title="Cart Products"
                    actions={
                        cart.items.length > 0
                            ? [<ButtonCheckOut key='Check-Out' handleCheckOut={handleCheckOut} />]
                            : undefined
                    }
                >
                    {cart.items.map((value) => <CartProduct value={value} key={value.id} />)}
                    {cart.items.length === 0 &&
                        <Empty>
                            <Button type='primary' onClick={() => navigate("/user")}>Back to shopping</Button>
                        </Empty>}

                </Card>
            </div>
        </>
    )
}
