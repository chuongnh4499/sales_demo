import React, { createContext, useContext, useState } from "react";

interface ICartContext {
    cart: ICart;
    setCart: (cart: ICart) => void;
}

export interface ICartItem {
    id: string;
    name: string;
    description: string;
    quantity: number;
}

interface ICart {
    items: ICartItem[];
}


const CartContext = createContext<ICartContext>(null!);

export const CartProvider: React.FC = ({ children }) => {

    const defaultCart = { items: [] };
    const [cart, setCart] = useState<ICart>(defaultCart);

    const valueCartContext: ICartContext = {
        cart,
        setCart
    }

    return <CartContext.Provider value={valueCartContext}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
