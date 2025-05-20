import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product : [],
}

const topSelingSlice = createSlice(({
    name :"Top Selling",
    initialState,
    reducers:{
        productLoading:(state,action)=>{
            state.product = action.payload;
        }
    }
}))

export const {productLoading}=topSelingSlice.actions;
export default topSelingSlice.reducer;