import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Button, Space } from 'antd'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { getBigDataExample } from '../../api/users'
import { LogOutButton } from '../../components/logout-button'
import { useCartContext } from '../../context/cart-context'
import { useStore } from '../../context/user'
import { Role } from '../../interfaces/types'


export const UserHomePage: React.FC = () => {

    // const {isLoading} = useQuery('example-data',getBigDataExample);

    const navigate = useNavigate();
    const { cart } = useCartContext();
    const { role } = useStore();
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

    const goToSalesChannel = () => {
        navigate("/seller")
    }

    const handleBigData = () => {
        return 
    }

    return (
        <div>
            <h1>User Page</h1>
            <div>
                <Space size={'middle'}>
                    <Button type='primary' onClick={handleEditProfile}>Edit Profile</Button>
                    <Button type='primary' danger onClick={handleBigData}>Get Big Data</Button>
                    {role == Role.USER ?
                        <>
                            <Button type='primary' onClick={handleSalesRegistration}>Sales Registration</Button>
                            <Button type='primary' onClick={handleFormRegistration}>My Form Registration</Button>
                        </> :
                        <Button type='primary' onClick={goToSalesChannel}>Go to sales channel</Button>}

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