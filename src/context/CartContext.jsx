import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};