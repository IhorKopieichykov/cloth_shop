import React, { useState, useEffect, useMemo, createContext } from "react";
import useLocalStorage from "../../helpers/useLocalStorage";

export const CartContext = createContext({
    cart: [],
    setItems:()=>{}
});

export const CartProvider = ({children}) => {
    const [items, setItems] = useLocalStorage('cart', []);
    const [cart, setCart] = useState(items);   
    
    useEffect(() => {
        setCart(items);
    }, [items])

    const contextValue = useMemo(() => (
        {
            cart,
            setItems,
        }
      ), [cart, setItems]);
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}