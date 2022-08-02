import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'main',
  initialState: {
    hidden: false,
  },
  reducers: {
    setHidden(state: any, { payload }: any) {
      return { ...state, hidden: payload };
    },
  },
});

export const { setHidden } = slice.actions;

export const selectHidden = (state: { hidden: unknown }) => state.hidden;

export default slice.reducer;
