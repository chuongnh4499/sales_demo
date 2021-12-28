import { Button } from 'antd'
import { Outlet, useNavigate } from 'react-router-dom'
import { LogOutButton } from '../../components/logout-button'

export const Admin: React.FC = () => {

    const navigate = useNavigate();

    const onNavigate = () => {
        navigate("/admin/user-form-register");
    }

    return (
        <div>
            <h1>Admin</h1>
            <Button onClick={onNavigate} type='primary'>List User Registration</Button>
            <LogOutButton />
            <Outlet />
        </div>
    )
}