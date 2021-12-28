import { Button, Card, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../context/user';
import { useCheckOut } from '../../hooks/user/mutations/useCheckOut';

// interface CartProps{}



export const Cart: React.FC = () => {

    const navigate = useNavigate();
    const { cart, setCart } = useStore();
    const { submitOrder } = useCheckOut();

    const handleCheckOut = () => {

        const values = {
            items: cart.items.map((item) => {
                return {
                    id: item.id,
                    quantity: item.quantity
                }
            })
        }

        submitOrder(values);
        //set cart default
        setCart({ items: [] })
    }

    //If card empty hide button check out
    const actionCard = cart.items.length > 0 ? [
        <Button
            key='CheckOut'
            style={{ width: '90%' }}
            type='primary'
            shape='round'
            onClick={handleCheckOut}
        >
            Check Out
        </Button>] : []

    return (
        <>
            <h2>Cart</h2>
            <div style={{ width: '50%', display: 'inline-block', textAlign: 'left', marginBottom: 50 }}>
                <Card
                    title="Cart Products"
                    actions={actionCard}

                >
                    {cart.items.map((value) => {
                        return <Card
                            key={value.id}
                            style={{ marginTop: 16 }}
                            type="inner"
                            title={value.name}
                            extra={<a href="#">More</a>}
                        >
                            <span>Amount: {value.quantity}</span>
                            <br />
                            <span>Description: {value.description}</span>
                        </Card>
                    })}
                    {cart.items.length === 0 &&
                        <Empty>
                            <Button type='primary'onClick={() => navigate("/user")}>Back to shopping</Button>
                        </Empty>}

                </Card>
            </div>
        </>
    )
}
