import { Button, Space } from 'antd'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { LogOutButton } from '../../components/logout-button'
import { useStore } from '../../context/user';
import { Role } from '../../interfaces/types';

export const SellerHomePage: React.FC = () => {

    const navigate = useNavigate();
    const { role } = useStore();

    const onViewListProducts = () => {
        navigate("/seller");
    }

    const goToFormPost = () => {
        navigate("/seller/post-product");
    }

    if (role !== Role.SELLER) {
        return <Navigate to="/login" replace={true} />
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

