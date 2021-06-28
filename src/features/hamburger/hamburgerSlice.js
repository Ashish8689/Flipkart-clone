import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value:false,
};


export const hamburgerSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    sethamburgerValue: (state,action) => {
      state.value = action.payload;
    },
  },
});

export const { sethamburgerValue } = hamburgerSlice.actions;

export const selecthamburger = (state) => state.hamburger.value;

export default hamburgerSlice.reducer;
