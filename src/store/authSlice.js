import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn:false,
  token:'',
  lat:undefined,
  lng:undefined,
}

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    logout(state){
      state.isLoggedIn = false;
      state.token = '';
      document.cookie = `token='';expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    },
    login(state,action)
    {
      state.isLoggedIn = true;
      state.token = action.payload;
      let date = new Date();
      date.setTime(date.getTime()+(15*1000));
      document.cookie = `token=${state.token};expires=${date}; path=/`;
    }
  }
})

export const authSliceActions = authSlice.actions;
export default authSlice;