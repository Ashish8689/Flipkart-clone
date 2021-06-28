import React from 'react'
import './cart.css'
import { useDispatch } from 'react-redux';
import { removeItemCart, setQuantity } from '../../features/products/productsSlice';


function CartItem({cart:{id,category,img,inCart,price,title}}) {

    const dispatch = useDispatch();

    const removeProduct = () =>{
        dispatch(removeItemCart({
            id:id,
            category:category
        }))
    }

    return (
        <div className="cart-block">
            <div className="cart-flex">
                <div className="cart-left">
                    <div className="cart-img-container">
                        <img src={img} alt={title} />
                    </div>
                </div>
                <div className="cart-right">
                    <div className="cart-content-container">
                        <h1 className="cart-title">{title}</h1>
                        <div className="cart-price-container">
                            <h2 className="cart-price">₹ {price} </h2>
                        </div>

                        <div className="quantity-container">
                            <label for="quantity">Qty : </label>
                            <select name="quantity" id="quantity" 
                             onChange={(e)=> dispatch(setQuantity({
                                 id:id,
                                 qty:e.target.value
                             }))}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>


                        <button onClick={removeProduct}> Remove from cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
