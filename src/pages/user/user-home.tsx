import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Button, Space } from 'antd'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { LogOutButton } from '../../components/logout-button'
import { useStore } from '../../context/user'


export const UserHomePage: React.FC = () => {

    const navigate = useNavigate();
    const { cart } = useStore();
    const [userID] = useState('USER@123');

    const handleEditProfile = () => {
        navigate(`/user/profile/${userID}`);
    }

    const handleSalesRegistration = () => {
        navigate(`/user/sales-registration`);
    }

    const handleFormRegistration = () => {
        navigate(`/user/form-registration`);
    }

    const viewCart = () => {
        navigate(`/user/cart`);
    }

    const viewHisToryOrder = () => {
        navigate(`/user/history-order`);
    }

    return (
        <div>
            <h1>User Page</h1>
            <div>
                <Space size={'middle'}>
                    <Button type='primary' onClick={handleEditProfile}>Edit Profile</Button>
                    <Button type='primary' onClick={handleSalesRegistration}>Sales Registration</Button>
                    <Button type='primary' onClick={handleFormRegistration}>My Form Registration</Button>
                    <Button type='primary' onClick={viewHisToryOrder}>View History Order</Button>

                    <Badge size='default' count={cart.items.length}>
                        <Button
                            type='primary'
                            icon={<ShoppingCartOutlined />}
                            onClick={viewCart}
                        >Cart
                        </Button>
                    </Badge>

                    <LogOutButton />
                </Space>
            </div>
            <Outlet />

        </div>
    )
}