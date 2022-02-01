import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';

const Paths = () => {
    return (
        <div>
            <Routes>
                <Routes path='/' exact component={Home}/>
                <Routes path='/catalog/:slug' exact component={Product}/>
                <Routes path='/catalog' exact component={Catalog}/>
                <Routes path='/cart' exact component={Cart}/>

            </Routes>
        </div>
    )
}

export default Paths;
