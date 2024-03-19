import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

const App = () => {
    return (
        <Router>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<ItemListContainer />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                    <Route exact path='/category/:category' element={<ItemListContainer />} />
                </Routes>
            </CartProvider>
        </Router>
    );
};

export default App;