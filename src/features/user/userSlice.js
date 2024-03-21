import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { authService } from './userService';

export const registerUser = createAsyncThunk("auth/register", async (data, thunkAPI)=>{
    try{
        return await authService.register(data);
         
    } catch(error) {
        return thunkAPI.rejectWithValue(error);
    }
});
export const verifyUser = createAsyncThunk("auth/verify-user", async (data, thunkAPI)=>{
    try{
        return await authService.verifyCode(data);
    } catch(error) {
        return thunkAPI.rejectWithValue(error);
    }
});
export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPI)=>{
    try{
        return await authService.login(userData)
    } catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
});
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
);
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
export const emptyCart = createAsyncThunk(
    "user/cart/delete",
    async (thunkAPI) => {
        try{
            return await authService.emptyCartItems();
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
);
export const createAnOrder = createAsyncThunk(
    "user/cart/create-order",
    async (orderDetail, thunkAPI) => {
        try{
            return await authService.createOrder(orderDetail);
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const getOrders = createAsyncThunk(
    "user/get-orders",
    async (thunkAPI) => {
        try{
            return await authService.getUserOrders();
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const updateUserDetails = createAsyncThunk(
    "user/update-details",
    async (userDetail, thunkAPI) => {
        try{
            return await authService.updateUser(userDetail);
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const forgotPasswordToken = createAsyncThunk(
    "user/forgot-password",
    async (data, thunkAPI) => {
        try{
            return await authService.forgotPassToken(data);
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);
export const resetPassword = createAsyncThunk(
    "user/reset-password",
    async (data, thunkAPI) => {
        try{
            return await authService.resetPass(data);
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);


const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState = {
    user:getCustomerfromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
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
                toast.info("Check Email for verification code")
            }
        }).addCase(registerUser.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message = action.payload.response.data.error || "Something went wrong"; // Display the error message from the backend
            toast.error(state.message);
        })
        .addCase(verifyUser.pending, (state)=>{
            state.isLoading=true;
        }).addCase(verifyUser.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.verifiedUser=action.payload;
            if (state.isSuccess === true) {
                toast.info("Verification complete.  You can now login.")
            }
        }).addCase(verifyUser.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message = action.payload.response.data.error || "Something went wrong"; // Display the error message from the backend
            toast.error(state.message);
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
                toast.info("Logged in succesfully")
            }
        }).addCase(loginUser.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.user=null;
            state.message = action.payload.response.data.error || "Something went wrong"; // Display the error message from the backend
            toast.error(state.message);
            
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
                toast.info("Updated cart quantity successfully")
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
        .addCase(emptyCart.pending, (state)=>{
            state.isLoading=true;
        }).addCase(emptyCart.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.emptiedCart=action.payload;
        }).addCase(emptyCart.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
        })
        .addCase(createAnOrder.pending, (state)=>{
            state.isLoading=true;
        }).addCase(createAnOrder.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.orderedProduct=action.payload;
            if (state.isSuccess === true) {
                toast.info("Order placed successfully")
            }
        }).addCase(createAnOrder.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
            if (state.isError === true) {
                toast.error(action.error)
            }
        })

        .addCase(getOrders.pending, (state)=>{
            state.isLoading=true;
        }).addCase(getOrders.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.getOrderedProducts=action.payload;
           
        }).addCase(getOrders.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
           
        })

        .addCase(updateUserDetails.pending, (state)=>{
            state.isLoading=true;
        }).addCase(updateUserDetails.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.updatedUser=action.payload;
                let currentData = JSON.parse(localStorage.getItem("customer"));
                let newUserData = {
                    _id: currentData._id,
                    token: currentData.token,
                    email: action?.payload?.email,
                    username:action?.payload?.username
                };
                localStorage.setItem("customer", JSON.stringify(newUserData));
                state.user=newUserData;
                toast.success("Profile updated successfully")
            
        }).addCase(updateUserDetails.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
            if (state.isError === true) {
                toast.info("Something went wrong")
            }
        })

        .addCase(forgotPasswordToken.pending, (state)=>{
            state.isLoading=true;
        }).addCase(forgotPasswordToken.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.token=action.payload;
            if (state.isSuccess === true) {
                toast.info("Password reset  link has been sent to your email.")
            }
        }).addCase(forgotPasswordToken.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message = action.payload.response.data.error || "Something went wrong"; // Display the error message from the backend
            toast.error(state.message);
        })
        .addCase(resetPassword.pending, (state)=>{
            state.isLoading=true;
        }).addCase(resetPassword.fulfilled, (state, action)=> {
            state.isError=false;
            state.isSuccess=true;
            state.isLoading=false;
            state.pass=action.payload;
            if (state.isSuccess === true) {
                toast.info("Password reset  successfully.")
            }
        }).addCase(resetPassword.rejected, (state, action)=>{
            state.isError=true;
            state.isSuccess=false;
            state.isLoading=false;
            state.message=action.error;
            if (state.isError === true) {
                toast.info("Something went wrong")
            }
        })

    }
})

export default authSlice.reducer;

