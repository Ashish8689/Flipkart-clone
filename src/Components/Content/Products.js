import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch } from 'react-redux';
import { setCart, setWishlist } from '../../features/products/productsSlice';

function Products({product:{id,category,company,img,wishlist,inCart,price,title}}) {


    const dispatch = useDispatch();

    const AddToCart = () =>{
        dispatch(setCart({
            id:id,
            category:category
        }));
    }

    const AddWishlist = () =>{
        dispatch(setWishlist({
            id:id,
            category:category
        }));
    }
    
    return (
        <div className="product-block">
             <div className="product-block-img-container">
                 <img src={img} alt={title} />
                 <div className="wishlist-container" onClick={AddWishlist} >
                     {wishlist ? <FavoriteIcon className="product-wishlist"/> 
                             : <FavoriteBorderIcon className="product-wishlist" /> }
                 </div>
             </div>
             <div className="product-content">
                 <h1 className="product-title">{title}</h1>
                 <div className="product-price-container">
                    <h2 className="product-price">₹ {price} </h2>
                    {inCart ?  <button disabled className="inCartbutton"> Go to cart</button>
                            :  <button onClick={AddToCart}> <ShoppingCartIcon className="product-cart-icon"/> 
                                Buy Now</button>
                    }
                 </div>
             </div>
        </div>
    )
}

export default Products
