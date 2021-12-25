import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { LogOutButton } from '../../components/logout-button'


export const UserHomePage: React.FC = () => {
    

    const navigate = useNavigate()

    const [userID] = useState('USER@123')

    const handleEditProfile = () => {
        navigate(`/user/profile/${userID}`)
    }

    const handleSalesRegistration = () => {
        navigate(`/user/sales-registration`)
    }

    return (
        <div>
            <h1>User Page</h1>
            <div>
                <button onClick={handleEditProfile}>Edit Profile</button>
                <button onClick={handleSalesRegistration}>Sales Registration</button>
                <LogOutButton />
            </div>
            
            <Outlet />

        </div>
    )
}