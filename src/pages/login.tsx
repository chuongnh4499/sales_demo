import React from 'react'
import { LoginForm } from '../components/login-form'
import { getUser } from '../api/users'
import { useQuery } from 'react-query'


export const Login: React.FC = () => {

    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}