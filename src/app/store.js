import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/Cart/cartSlice.js'


export const store = configureStore({
    reducer: {
        Cart: cartReducer
    }
})