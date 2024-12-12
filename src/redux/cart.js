import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[]
    },
    reducers:{
        addToCart: (state, action) => {
            let existingItem = state.cartItems.find(item=>item.id === action.payload.id)
            if(existingItem){
                existingItem.qty+=1
            }else{
                state.cartItems.push({...action.payload,qty:1})
            }  
    },
    removeCart:(state,action)=>{
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    }
}
})

export const selectCartTotals = (state) => {
    const totals = state.cart.cartItems.reduce(
        (acc, item) => {
            acc.totalQuantity += item.qty; 
            acc.totalPrice += item.price * item.qty;
            return acc;
        },
        { totalQuantity: 0, totalPrice: 0, tax: 0, shipping: 40 }
    );

    const tax = totals.totalPrice * 0.05;
    totals.tax = tax; 
    totals.totalCost = totals.totalPrice + totals.tax + totals.shipping;

    return totals;
};

export const {addToCart,removeCart}=cartSlice.actions

export default cartSlice.reducer