import React from 'react'
import './wishlist.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { setCart, setWishlist } from '../../features/products/productsSlice';
import { useDispatch } from 'react-redux';


function WishlistItem({wishlist:{id,category,company,info,img,wishlist,inCart,price,title}}) {

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
        <div className="wishlist-block">
            <div className="wishlist-flex">
                <div className="wishlist-left">
                    <div className="wishlist-img-container">
                        <img src={img} alt={title} />
                        <div className="wishlist-favourite-container" onClick={AddWishlist} >
                            {wishlist ? <FavoriteIcon className="product-wishlist"/> 
                                    : <FavoriteBorderIcon className="product-wishlist" /> }
                        </div>
                    </div>
                </div>
                <div className="wishlist-right">
                    <div className="wishlist-content-container">
                        <h1 className="wishlist-title">{title}</h1>
                        <p className="wishlist-para">{info}</p>
                        <div className="wishlist-price-container">
                            <h2 className="wishlist-price">₹ {price} </h2>
                            {inCart ?  <button disabled className=" "> Go to cart</button>
                                    :  <button onClick={AddToCart}> <ShoppingCartIcon className="wishlist-cart-icon"/> 
                                        Buy Now</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem
