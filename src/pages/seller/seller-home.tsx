import { Button, Space } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import { LogOutButton } from '../../components/logout-button'

export const SellerHomePage: React.FC = () => {

    const navigate = useNavigate();

    const onViewListProducts = () => {
        navigate("/seller/view-my-product");
    }

    const goToFormPost = () => {
        navigate("/seller/post-product");
    }

    return (
        <div>

            <h1>Sale</h1>
            <Space>
                <Button type='primary' onClick={onViewListProducts} >My List Products</Button>
                <Button type='primary' onClick={goToFormPost}>Add Product</Button>
                <LogOutButton />
            </Space>
            <Outlet />

        </div>
    )
}

