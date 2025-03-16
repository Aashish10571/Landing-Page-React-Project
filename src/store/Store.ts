import { configureStore } from "@reduxjs/toolkit";
import NavReducer from '../features/NavFeature'

export const Store = configureStore({
  reducer: NavReducer
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
