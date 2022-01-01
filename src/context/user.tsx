import { createContext, useContext, useState } from "react"
import { Role } from "../interfaces/types";

interface IUserContext {
    cart: ICart;
    setCart: (cart: ICart) => void;
    role: Role;
    setRole: (role: Role) => void;
}

export interface ICartItem{
    id: string;
    name: string;
    description: string;
    quantity: number;
}

interface ICart {
    items: ICartItem[];
}


const defaultCart = { items: [] };

const UserContext = createContext<IUserContext>(null!);

// eslint-disable-next-line react/prop-types
export const UserProvider: React.FC = ({ children }) => {
    const [cart, setCart] = useState<ICart>(defaultCart);

    const [role ,setRole] = useState<Role>(undefined!);

    const value: IUserContext = {
        cart,
        setCart,
        role,
        setRole
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

}

export const useStore = () => useContext(UserContext);
