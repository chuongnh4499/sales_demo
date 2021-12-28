import { createContext, useContext, useState } from "react"
import { IProduct } from "../interfaces/product";

interface IUserContext {
    cart: ICart;
    setCart: (cart: ICart) => void;
}

interface ICartItem{
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


    const value: IUserContext = {
        cart,
        setCart
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;

}

export const useStore = () => useContext(UserContext);
