import React, { createContext, useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from  "./Header"
import About from "./About"
import Cart from "./Cart"
import Footer from "./Footer"
import SingleProduct from './SingleProduct'

export const productAPI = createContext({})

function Index() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <productAPI.Provider value={{ cart, setCart }}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <br />
                <Footer />
            </BrowserRouter>
        </productAPI.Provider>
    );
}

export default Index;
