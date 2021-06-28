import React from 'react';
import './cart.css';
import { useSelector } from 'react-redux'
import { selectCart } from '../../features/products/productsSlice';
import CartItem from "./CartItem";
import Subtotal from './Subtotal';

function Cart() {

    const carts = useSelector(selectCart)
    return (
        <>
        {carts.length > 0 ? (
                <div className="cart-body-container">
                    <div className="cart-body-left">
                        {carts.map(cart =>(
                        <CartItem key={cart.id} cart={cart} />
                        ))}
                    </div>

                    <div className="cart-body-right">
                         <Subtotal carts={carts}/>
                    </div>
                </div>      
            ) : (
                <div className="cart-text-container">
                    <h1>No Item added to <span>Cart</span> !!! </h1>
                </div>
            )} 
        </>
    )
}

export default Cart
