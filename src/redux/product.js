import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProductsData",
    async()=>{
        const res = await axios.get("https://633245c8a54a0e83d24e58d8.mockapi.io/items")
        return res.data
    }
)

const productSlice = createSlice({
    name:"products",
    initialState:{
        status:"idel",
        products:[],
        isError:false
    },
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(getProducts.pending,(store)=>{
            store.status="pending"
        })
        .addCase(getProducts.fulfilled,(store,action)=>{
            store.status="success",
            store.products=action.payload
        })
        .addCase(getProducts.rejected,(store)=>{
            store.status="error",
            store.isError=false
        })
    }
})

export default productSlice.reducer