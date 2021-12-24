import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import LogOutButton from '../../components/logout_button'

function UserHomePage() {
    const navigate = useNavigate()

    const [userID] = useState('USER@123')

    const handleEditProfile = () => {
        navigate(`/user/profile/${userID}`)
    }

    return (
        <div>
            <h1>User Page</h1>
            <button onClick={handleEditProfile}>Edit Profile</button>
            <LogOutButton />
            <Outlet />
            
        </div>
    )
}

export default UserHomePage
