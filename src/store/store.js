import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import someSlice from "./someSlice";


const store = configureStore({
  reducer:{
    auth:authSlice.reducer,
    someSlice:someSlice.reducer,
  }
});

export default store;
