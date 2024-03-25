import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { productService } from './productService';


export const getAllProducts = createAsyncThunk("product/get", async (data, thunkAPI)=>{
    try{
        return await productService.getProducts(data);
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
export const addRating = createAsyncThunk("product/rating", async (data, thunkAPI)=>{
    try{
        return await productService.rateProduct(data);
    } catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
});

const getWishlistfromLocalStorage = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

const productState = {
    wishlist:getWishlistfromLocalStorage,
    product:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
    
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
                localStorage.setItem('wishlist', JSON.stringify(action.payload.wishlist));
            }
        })
        .addCase(addToWishlist.rejected, (state,action)=>{
            state.isLoading= false;
            state.isError= true;
            state.isSuccess= false;
            state.message= action.error
            if (state.isError === true ) {
                toast.info("Login to view products in wishlist")
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
        .addCase(addRating.pending, (state)=>{
            state.isLoading=true;
        })
        .addCase(addRating.fulfilled,(state,action)=> {
            state.isLoading= false;
            state.isSuccess= true;
            state.isError= false;
            state.rating= action.payload;
            state.message= "Review added Successully!"
            if (state.isSuccess === true) {
                toast.info("Review added succesfully")
            }
            
        })
        .addCase(addRating.rejected, (state,action)=>{
            state.isLoading= false;
            state.isError= true;
            state.isSuccess= false;
            state.message= action.error
            if (state.isError === true) {
                toast.info("Something went wrong")
            }
        })
    }
})

export default productSlice.reducer; 