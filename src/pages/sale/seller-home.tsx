import { Outlet } from 'react-router-dom'
import { LogOutButton } from '../../components/logout-button'

export const SellerHomePage: React.FC = () => {
    return (
        <div>

            <h1>Sale</h1>
            <LogOutButton />
            <Outlet />

        </div>
    )
}

