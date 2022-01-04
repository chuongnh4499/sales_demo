import React, { createContext, useContext, useState } from 'react'

interface IAuthContext {
    authenticated: boolean,
    toggleAuth: (status: boolean) => void
} 

const AuthContext = createContext<IAuthContext>(null!);

export const AuthProvider: React.FC = ({ children }) => {
    const [authenticated, setAuth] = useState(false);

    const toggleAuth = (status: boolean) =>{
        setAuth(status);
    }

    const valueAuthContext: IAuthContext = {
        authenticated,
        toggleAuth
    }

    return <AuthContext.Provider value={valueAuthContext}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);