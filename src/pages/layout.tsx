import { AppContent } from '../components/app-content';
import { SiderContent } from '../components/sider-content';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const { Sider } = Layout;

export const LayOutApp = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = () => {
        setCollapsed(!collapsed);
    };
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
