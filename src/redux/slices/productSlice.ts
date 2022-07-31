import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    setProducts(state: any, { payload }: any) {
      return { ...state, products: payload };
    },
  },
});

export const { setProducts } = slice.actions;

export const selectProducts = (state: { products: unknown }) => state.products;

export default slice.reducer;
