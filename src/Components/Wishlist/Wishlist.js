import React from 'react'
import { useSelector } from 'react-redux'
import { selectWishlist } from '../../features/products/productsSlice';
import WishlistItem from './WishlistItem';

function Wishlist() {

    const wishlists = useSelector(selectWishlist);
    
    return (
        <div className="wishlist-body-container">
            {wishlists.length > 0 ? (
                wishlists.map(wishlist =>(
                    <WishlistItem key={wishlist.id} wishlist={wishlist} />
                ))
            ) : (
                <div className="wishlist-text-container">
                    <h1>No Item added to <span>Wishlist</span> !!! </h1>
                </div>
            )}
            
        </div>
    )
}

export default Wishlist
