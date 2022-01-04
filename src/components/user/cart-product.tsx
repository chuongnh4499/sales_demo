import { Card } from 'antd'
import { ICartItem } from '../../context/cart-context'

interface CartProductProps {
    value: ICartItem;
}

export const CartProduct: React.FC<CartProductProps> = ({ value }: CartProductProps) => {
    return (
        <Card
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
    )
}
