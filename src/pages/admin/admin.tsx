import { Button, Space } from 'antd'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { LogOutButton } from '../../components/logout-button'
import { useStore } from '../../context/user';
import { Role } from '../../interfaces/types';

export const Admin: React.FC = () => {

    const navigate = useNavigate();
    const { role } = useStore();

    const onNavigate = () => {
        navigate("/admin/user-form-register");
    }
    
    if (role !== Role.ADMIN) {
        return <Navigate to="/login" replace={true}></Navigate>
    }

    return (
        <div>
            <h1>Admin</h1>
            <div>
                <Space>
                    <Button onClick={onNavigate} type='primary'>List User Registration</Button>
                    <LogOutButton />
                </Space>
            </div>
            <Outlet />
        </div>
    )
}