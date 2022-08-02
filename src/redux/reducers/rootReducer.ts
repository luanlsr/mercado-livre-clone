import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '../slices/productSlice';
import mainReducer from '../slices/mainSlice';

export const rootReducer = combineReducers({
  products: productReducer,
  main: mainReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
