import React from 'react'
import { useNavigate } from 'react-router-dom';

function LogOutButton() {

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

export default LogOutButton
