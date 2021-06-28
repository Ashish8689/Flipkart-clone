import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:null
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    Adduser: (state,action) => {
      state.user = (action.payload);
    },
    logout: (state,action) => {
      state.user = null;
    },
  },
});

export const { Adduser, logout } = userSlice.actions;

export const selectuser = (state) => state.user.user;

export default userSlice.reducer;
