import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
      document.cookie = `token='';expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
      document.cookie = `tokenExp='';expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    },
    login(state, action) {
      state.isLoggedIn = true;
      if (action.payload.token) {
        state.token = action.payload.token;
        let date = new Date();
        //should change 30 with action.payload.exp
        date.setTime(date.getTime() + 60 * 1000);
        document.cookie = `token=${state.token};expires=${date}; path=/`;
        document.cookie = `tokenExp=${date};expires=${date}; path=/`;
      }
      console.log("isLoggedIn: ", state.isLoggedIn);
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export default authSlice;
