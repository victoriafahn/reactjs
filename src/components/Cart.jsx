import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import SendOrders from './SendOrders';


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const { cart, removeFromCart } = useCart();

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        const updatedCart = cart.filter(product => product.id !== productId);
        setCartItems(updatedCart);
    };

    const handleBuy = () => {
        setCartItems(cart);
    };

    return (
        <div> {cart.length == 0 ? (
            <p>Tu carrito se encuentra vacio</p>
        ) : (
            <>
                <ul>
                    {cart.map(product => {
                        return (
                            <li key={product.id}>
                                <div>
                                    <p>{product.nombre}</p>
                                    <p>${product.precio}</p>
                                    <img src={product.imagen} width={100} />
                                    <button onClick={() => handleRemoveFromCart(product.id)}>Quitar del carrito</button>
                                </div>
                            </li>
                        )
                    }
                    )}
                </ul>
                <button onClick={handleBuy}>Comprar</button>
                {cart.length > 0 && <SendOrders cart= {cartItems} />}
            </>
        )
        }
        </div>
    );
};

export default Cart