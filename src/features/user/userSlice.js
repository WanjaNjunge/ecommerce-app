import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { authService } from './userService';

export const registerUser = createAsyncThunk("auth/register", async (userData, thunkAPI)=>{
    try{
        return await authService.register(userData)
    } catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPI)=>{
    try{
        return await authService.login(userData)
    } catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const getUserProductWishlist = createAsyncThunk(
    "user/wishlist",
    async (thunkAPI) => {
        try{
            return await authService.getUserWishlist();
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const addProdToCart = createAsyncThunk(
    "user/cart/add",
    async (cartData, thunkAPI) => {
        try{
            return await authService.addToCart(cartData);
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const getCartDetails = createAsyncThunk(
    "user/cart/get",
    async (thunkAPI) => {
        try{
            return await authService.getCart();
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const deleteCartProd = createAsyncThunk(
    "user/cart/product/delete",
    async (cartItemId, thunkAPI) => {
        try{
            return await authService.removeProdFromCart(cartItemId);
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const updateCartProd = createAsyncThunk(
    "user/cart/product/update",
    async (cartDetail, thunkAPI) => {
        try{
            return await authService.updateProdFromCart(cartDetail);
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
    user:getCustomerfromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending, (state)=>{
            state.isLoading=true;
        }).addCase(registerUser.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.createdUser=action.payload;
            if (state.isSuccess === true) {
                toast.info("User registered succesfully")
            }
        }).addCase(registerUser.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })

        // loginMutation will be
        .addCase(loginUser.pending, (state)=>{
            state.isLoading=true;
        }).addCase(loginUser.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.user=action.payload;
            if (state.isSuccess === true) {
                localStorage.setItem('token', action.payload.token);
                // window.location.reload();
                toast.info("User logged in succesfully")
            }
        }).addCase(loginUser.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })
        .addCase(getUserProductWishlist.pending, (state)=>{
            state.isLoading=true;
        }).addCase(getUserProductWishlist.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.wishlist=action.payload;
        }).addCase(getUserProductWishlist.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
        })
        .addCase(addProdToCart.pending, (state)=>{
            state.isLoading=true;
        }).addCase(addProdToCart.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.cartProduct=action.payload;
            if (state.isSuccess === true) {
                toast.info("Added to cart successfully")
            }
        }).addCase(addProdToCart.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })
        .addCase(getCartDetails.pending, (state)=>{
            state.isLoading=true;
        }).addCase(getCartDetails.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.cartProducts=action.payload;
        }).addCase(getCartDetails.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
        })
        .addCase(deleteCartProd.pending, (state)=>{
            state.isLoading=true;
        }).addCase(deleteCartProd.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.deleteCartProduct=action.payload;
            if (state.isSuccess === true) {
                toast.info("Removed from cart successfully")
            }
        }).addCase(deleteCartProd.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
            if (state.isError === true) {
                toast.error("Something went wrong")
            }
        })
        .addCase(updateCartProd.pending, (state)=>{
            state.isLoading=true;
        }).addCase(updateCartProd.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.updateCartProduct=action.payload;
            if (state.isSuccess === true) {
                toast.info("Updated cart successfully")
            }
        }).addCase(updateCartProd.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
            if (state.isError === true) {
                toast.error("Something went wrong")
            }
        })

    }
})

export default authSlice.reducer;
