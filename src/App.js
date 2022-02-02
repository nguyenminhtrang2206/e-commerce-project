import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Product from './pages/Product';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Layout from './components/Layout';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/:slug' element={<Product />}/>
                    <Route path='catalog' element={<Catalog />}/>
                    <Route path='cart' element={<Cart />}/>
                </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;