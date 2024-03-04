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
    }
})

export default authSlice.reducer;