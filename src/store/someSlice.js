import { createSlice } from "@reduxjs/toolkit";

const someSlice = createSlice({
  name: "someSlice",
  initialState: { name: "" },
  reducers:{
    setName(state,action)
    {
      state.name = action.payload;
      console.log(state.name);
    }
  }
});

export const someSliceActions = someSlice.actions;
export default someSlice;
