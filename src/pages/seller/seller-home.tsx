import { Button } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import { LogOutButton } from '../../components/logout-button'

export const SellerHomePage: React.FC = () => {

    const navigate = useNavigate();

    const onViewListProducts = () => {
        navigate("/seller/view-my-product");
    }

    return (
        <div>

            <h1>Sale</h1>
            <Button type='primary' onClick={onViewListProducts} >My List Products</Button>
            <LogOutButton />
            <Outlet />

        </div>
    )
}

