import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn:false,
  token:'',
}

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    logout(state){
      state.isLoggedIn = false;
      state.token = '';
      console.log('logout func',state);

    },
    login(state,action)
    {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      console.log('login func',state);
    }
  }
})

export const authSliceActions = authSlice.actions;
export default authSlice;