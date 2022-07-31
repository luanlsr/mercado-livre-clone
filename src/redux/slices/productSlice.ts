import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'products',
  initialState: {
    products: {},
    searchValue: '',
  },
  reducers: {
    setProducts(state: any, { payload }: any) {
      return { ...state, products: payload };
    },
    setSearch(state: any, { payload }: any) {
      return { ...state, searchValue: payload };
    },
  },
});

export const { setProducts, setSearch } = slice.actions;

export const selectProducts = (state: { products: unknown }) => state.products;
export const selectSearchValues = (state: { searchValue: unknown }) =>
  state.searchValue;

export default slice.reducer;
