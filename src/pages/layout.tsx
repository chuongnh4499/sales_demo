import { AppContent } from '../components/app-content';
import { SiderContent } from '../components/sider-content';
import { Layout } from 'antd';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useStore } from '../context/user';
import { useAuthContext } from '../context/auth-context';
import { Role } from '../interfaces/types';
import { useCookies } from 'react-cookie';

const { Sider } = Layout;

export const LayOutApp = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [cookies] = useCookies(['isAuthenticated']);

    const navigate = useNavigate();
    const { role } = useStore();
    const onCollapse = () => {
        setCollapsed(!collapsed);
    };


    useEffect(() => {
        let roleUser = '';
        if (role === Role.USER)
            roleUser = 'user';
        else if (role === Role.SELLER)
            roleUser = 'seller';
        else if (role === Role.ADMIN)
            roleUser = 'admin';

        if (cookies.isAuthenticated == 'true')
            navigate(`/${roleUser}`, { replace: true });
        else
            navigate(`/login`, { replace: true });

    }, [])

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <SiderContent />
                </Sider>
                <AppContent>
                    <div className='App'>
                        <Outlet />
                    </div>
                </AppContent>
            </Layout>
        </>
    )
}
