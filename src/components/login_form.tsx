import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function LoginForm() {

    const navigate = useNavigate();

    const [isUser, setIsUser] = useState(false)
    const [isSale, setIsSale] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [error, setError] = useState(false)


    const handleSubmitUser = () => {
        navigate("/user", {replace: true})
    }

    const handleSubmitAdmin = () => {
        setIsAdmin(true);
    }

    const handleErrorLogin = () => {
        setError(true)
    }
    const handleSubmitSale = () => {
        setIsSale(true)
    }

    return (
        <div>
            {isUser && <Navigate to="/user" replace={true}></Navigate>}
            {isSale && <Navigate to="/sale" replace={true}></Navigate>}
            {isAdmin && <Navigate to="/admin" replace={true}></Navigate>}
            email: <input type="text" /><br />
            password: <input type="password" /><br />
            {error && <span style={{color: 'red'}}>Error !!!!!</span>} <br />
            <button>Submit</button> <br/>
            <span>
                Don't have account? <Link to="/register">Sign Up Now</Link>
            </span> <br />
            <button onClick={handleSubmitUser}>SUBMIT (user)</button>
            <button onClick={handleSubmitSale}>SUBMIT (sale)</button>
            <button onClick={handleSubmitAdmin}>SUBMIT (admin)</button>
            <button onClick={handleErrorLogin}>SUBMIT (error)</button>

        </div>
    )
}

export default LoginForm
