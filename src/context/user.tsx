import React, { createContext, useContext, useState } from "react"
import { Role } from "../interfaces/types";

interface IUserContext {
    role: Role;
    setRole: (role: Role) => void;
}


const UserContext = createContext<IUserContext>(null!);

export const UserProvider: React.FC = ({ children }) => {

    const [role ,setRole] = useState<Role>(undefined!);

    const value: IUserContext = {
        role,
        setRole,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

}

export const useStore = () => useContext(UserContext);
