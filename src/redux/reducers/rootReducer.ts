import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice';

export const rootReducer = combineReducers({
  products: productReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
