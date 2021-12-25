import { Outlet } from 'react-router-dom'
import { LogOutButton } from '../../components/logout-button'

export const Admin: React.FC = () => {
    return (
        <div>
            <h1>Admin</h1>
            <LogOutButton />
            <Outlet />
        </div>
    )
}