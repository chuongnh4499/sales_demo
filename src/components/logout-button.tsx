import { Button } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LogOutButton: React.FC = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/", {replace: true})
    }

    return (
        <>
            <Button type='primary' danger onClick={handleLogout}>Log out</Button>
        </>
    )
}
