import { configureStore } from '@reduxjs/toolkit';
import hamburgerReducer from '../features/hamburger/hamburgerSlice';
import userReducer from '../features/User/UserSlice';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    hamburger: hamburgerReducer,
    user: userReducer,
  },
});
