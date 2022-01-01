import { Button } from 'antd';
import React from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/user';

export const LogOutButton: React.FC = () => {

    const navigate = useNavigate();

    const { setRole } = useStore();

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const handleLogout = () => {
        setRole(undefined!);
        navigate("/login", { replace: true });        
        //Remove Cookies Tokens
        removeCookie('token');
    }

    return (
        <>
            <Button type='primary' danger onClick={handleLogout}>Log out</Button>
        </>
    )
}
