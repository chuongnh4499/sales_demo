import React from 'react'
import { Outlet } from 'react-router-dom'
import LogOutButton from '../../components/logout_button'

function Admin() {
    return (
        <div>
            <h1>Admin</h1>
            <LogOutButton />
            <Outlet />
        </div>
    )
}

export default Admin
