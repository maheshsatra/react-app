import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/product"
import cartSlice from "../redux/cart"


export const store = configureStore({
    reducer: {
        products: productSlice,
        cart:cartSlice
    }
});
