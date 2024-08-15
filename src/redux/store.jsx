import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slice/appSlice'
import productSlice from './slice/productSlice'

export const store = configureStore({
  reducer: {
    app : appSlice,
    product: productSlice
  },
})