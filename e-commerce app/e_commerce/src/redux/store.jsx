import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../redux/ProductSlice'
import basketSlice from '../redux/basketSlice'
export const store = configureStore({
  reducer: {
    products : productSlice,
    baskets : basketSlice
  },
})