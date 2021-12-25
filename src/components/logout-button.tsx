import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LogOutButton: React.FC = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/", {replace: true})
    }

    return (
        <>
            <button onClick={handleLogout}>Log out</button>
        </>
    )
}
