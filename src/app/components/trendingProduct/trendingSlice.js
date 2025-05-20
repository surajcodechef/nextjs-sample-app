import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    trendingItems : [],
}



const trendingSlice = createSlice(({
    name :"Trending ITems",
    initialState,
    reducers:{
        loadingITems:(state,action)=>{
            const allProducts = action.payload; 
            const filterProduct = allProducts.filter(item=>item.category=="fragrances")
            state.trendingItems = filterProduct;
        }
    }
}))

export const {loadingITems} = trendingSlice.actions;
export default trendingSlice.reducer;
