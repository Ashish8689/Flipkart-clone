import { createSlice } from '@reduxjs/toolkit';
import { StoreProduct, MenProduct, WomenProduct, kidsProduct, shoesProduct } from '../../productsData';

const initialState = {
  mobile:StoreProduct,
  men: MenProduct,
  women:WomenProduct,
  kids:kidsProduct,
  shoes:shoesProduct,
  cart: [],
  wishlist: [],
  total: "",
};


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    setCart: (state,action) => {
        let filterarray = state[action.payload.category].find( product => product.id === action.payload.id );
        filterarray.inCart = true;
        filterarray.count = 1;
        filterarray.total = filterarray.price;
        state.cart.unshift(filterarray);

        // ******************   Wishlist array  ***********************
        const wishlistarray = state.wishlist.find( ({ id }) => id === filterarray.id );
        if( wishlistarray){
          wishlistarray.inCart = true;
        }
    },

    setWishlist: (state,action) => { 
        //  Filter the Click product
        let filterarray = state[action.payload.category].find(product => product.id === action.payload.id);
        
        //  Verifying if the click array is in Wishlist or not >1 then yes
        let existing = state.wishlist.filter( exe => exe.id == filterarray.id);
        // alert(existing);

          if(existing.length > 0){
            filterarray.wishlist = false;
            state.wishlist = state.wishlist.filter(removeElement => removeElement.id !== filterarray.id);
            alert("Product remove from Wishlist");
          }
          else{
            //  Flat is use to merge array
            state.wishlist = [filterarray,...state.wishlist].flat();
            filterarray.wishlist = true;
            alert("New Product Added to Wishlist");
          }
    },

    removeItemCart : (state,action) =>{
        let NewCart = state.cart.filter( product => product.id !== action.payload.id );
        let UniqueProduct = state[action.payload.category].find( product => product.id == action.payload.id );

        let ProductIndex = state[action.payload.category].indexOf(UniqueProduct);
        let removeproduct = state[action.payload.category][ProductIndex];
        removeproduct.inCart = false;
        state.cart = NewCart;

        // ******************   Wishlist array  ***********************
        const wishlistarray = state.wishlist.find( ({ id }) => id === UniqueProduct.id );
        if( wishlistarray){
          wishlistarray.inCart = false;
        }
    },

    setQuantity : (state,action) =>{
        let filterarray = state.cart.find(product => product.id === action.payload.id);
        filterarray.count = action.payload.qty;
        filterarray.total = filterarray.price*action.payload.qty;
    },
  },
});

export const { setCart, setWishlist, removeItemCart,setQuantity } = productsSlice.actions;

export const selectmobile = (state) => state.products.mobile
export const selectCart = (state) => state.products.cart
export const selectWishlist = (state) => state.products.wishlist
export const selectmens = (state) => state.products.men
export const selectwomens = (state) => state.products.women
export const selectkids = (state) => state.products.kids
export const selectshoes = (state) => state.products.shoes


export default productsSlice.reducer;
