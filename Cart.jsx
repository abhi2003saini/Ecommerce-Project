import React, { useContext, useState, useEffect } from 'react';
import { productAPI } from './Index';
import './cart.css';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
    const { cart, setCart } = useContext(productAPI);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotalPrice();
    }, [cart]);

    const calculateTotalPrice = () => {
        const total = cart.reduce((acc, item) => acc + item.quantity * Math.floor(item.price * 85), 0);
        setTotalPrice(total);
    };

    const deletetodo = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
        calculateTotalPrice();
    };

    const incrementquantity = (index) => {
        const newCart = [...cart];
        newCart[index].quantity += 1;
        setCart(newCart);
        calculateTotalPrice();
    };

    const decrementquantity = (index) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 0) {
            newCart[index].quantity -= 1;
            setCart(newCart);
            calculateTotalPrice();
        }
    };

    return (
        <>
            <h1 className='py-5 px-3 font-bold text-2xl'>Cart</h1>
            {
                cart && cart.map((item, i) => (
                    <div key={i} className='product_detail'>
                        <img src={item.image} alt="" />
                        <div className='detail'>
                            <h2 className='font-bold line-clamp-1'>{item.title}</h2>
                            <p className='productprice'>Price: INR {Math.floor(item.price * 85)}</p>
                            <br />
                            <button onClick={() => deletetodo(i)}> <DeleteIcon /></button>
                            <br />
                            <button className='btn1' onClick={() => decrementquantity(i)}>-</button>
                            <p>Quantity: {item.quantity}</p>
                            <button className='btn1' onClick={() => incrementquantity(i)}>+</button>
                        </div>
                    </div>
                ))
            }
            <h1>Total: INR {totalPrice}</h1>
        </>
    );
}

export default Cart;
