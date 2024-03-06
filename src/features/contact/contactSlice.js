import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { contactService } from './contactService';
import { toast } from 'react-toastify';


export const createQuery = createAsyncThunk("enquiry/post", async (contactData, thunkAPI)=>{
    try{
        return await contactService.postQuery(contactData);
    } catch(error) {
        return thunkAPI.rejectWithValue(error)
    }
});


const contactState = {
    enquiry:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const contactSlice = createSlice({
    name:"enquiry",
    initialState:contactState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createQuery.pending, (state)=>{
            state.isLoading=true;
        })
        .addCase(createQuery.fulfilled,(state,action)=> {
            state.isLoading= false;
            state.isSuccess= true;
            state.isError= false;
            state.enquiry= action.payload;
            if (state.isSuccess === true) {
                toast.success(`Form submiited successfully!`);
            }
        })
        .addCase(createQuery.rejected, (state,action)=>{
            state.isLoading= false;
            state.isError= true;
            state.isSuccess= false;
            state.message= action.error;
            if (state.isError === true) {
                toast.success(`Something went wrong. Retry after a while`);
            }
        })
    }
})

export default contactSlice.reducer;