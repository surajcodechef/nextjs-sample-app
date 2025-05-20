import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    blog : []
}

const blogSlice = createSlice({
    name : "Blog",
    initialState,
    reducers : {
        blogLoading : (state,action)=>{
            state.blog = action.payload;
            console.log("Blog:-",action.payload)
        }
    }
})

export const {blogLoading} = blogSlice.actions;
export default blogSlice.reducer;