import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={decrement}>-</button>
            
            <button onClick={increment}>+</button>
        </div>
    );
}
export default ItemCount