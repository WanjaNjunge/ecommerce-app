import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { productService } from './productService';


export const getAllProducts = createAsyncThunk("product/get", async (thunkAPI)=>{
    try{
        return await productService.getProducts();
    } catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const getAProduct = createAsyncThunk("product/getById", async (id, thunkAPI)=>{
    try{
        return await productService.getSingleProduct(id);
    } catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
});

export const addToWishlist = createAsyncThunk("product/wishlist", async (prodId, thunkAPI)=>{
    try{
        return await productService.addToWishlist(prodId);
    } catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
});

const productState = {
    product:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const productSlice = createSlice({
    name:"product",
    initialState:productState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending, (state)=>{
            state.isLoading=true;
        })
        .addCase(getAllProducts.fulfilled,(state,action)=> {
            state.isLoading= false;
            state.isSuccess= true;
            state.isError= false;
            state.product= action.payload;
        })
        .addCase(getAllProducts.rejected, (state,action)=>{
            state.isLoading= false;
            state.isError= true;
            state.isSuccess= false;
            state.message= action.error
        })
        .addCase(addToWishlist.pending, (state)=>{
            state.isLoading=true;
        })
        .addCase(addToWishlist.fulfilled,(state,action)=> {
            state.isLoading= false;
            state.isSuccess= true;
            state.isError= false;
            state.addToWishlist= action.payload;
            state.message= "Added to wishlist!"
            if (state.isSuccess === true) {
                toast.info("Added to wishlist succesfully")
            }
        })
        .addCase(addToWishlist.rejected, (state,action)=>{
            state.isLoading= false;
            state.isError= true;
            state.isSuccess= false;
            state.message= action.error
            if (state.isError === true) {
                toast.info("Something went wrong")
            }
        })
        .addCase(getAProduct.pending, (state)=>{
            state.isLoading=true;
        })
        .addCase(getAProduct.fulfilled,(state,action)=> {
            state.isLoading= false;
            state.isSuccess= true;
            state.isError= false;
            state.singleProduct= action.payload;
            state.message= "Product Fetched Successully!"
        })
        .addCase(getAProduct.rejected, (state,action)=>{
            state.isLoading= false;
            state.isError= true;
            state.isSuccess= false;
            state.message= action.error
        })
    }
})

export default productSlice.reducer; 