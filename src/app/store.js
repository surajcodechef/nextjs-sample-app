import { configureStore } from '@reduxjs/toolkit'
import topSellingReducer from './components/productSlider/topSellingSlice'
import trendingSliceReducer from "./components/trendingProduct/trendingSlice"
import blogSliceReducer from "./components/blog/blogSlice"

const store = configureStore({
  reducer: {
    top: topSellingReducer,
    fregrance: trendingSliceReducer,
    blogshow: blogSliceReducer,
  },
})

export default store
