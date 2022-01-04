import { Button } from 'antd';
import React from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/auth-context';
import { useStore } from '../context/user';

export const LogOutButton: React.FC = () => {

    const navigate = useNavigate();

    const { setRole } = useStore();
    const { toggleAuth } = useAuthContext();

    const [_, __, removeCookie] = useCookies();

    const handleLogout = () => {
        setRole(undefined!);
        toggleAuth(false);
        //Remove Cookies Tokens
        removeCookie('isAuthenticated');
        removeCookie('token');
        //next page
        navigate("/login", { replace: true });
    }

    return (
        <>
            <Button type='primary' danger onClick={handleLogout}>Log out</Button>
        </>
    )
}
