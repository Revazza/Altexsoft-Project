import { createSlice } from "@reduxjs/toolkit"

const initialState={
  showNotification:false,
  msg:'',
  type:'',
}

const notificationSlice = createSlice({
  name:"notification",
  initialState,
  reducers:{
    showNotification(state,action)
    {
      state.msg=action.payload.msg;
      state.type=action.payload.type;
      state.showNotification = true;
    },
    hideNotification(state)
    {
      state.msg='';
      state.showNotification=false;
      state.type='';
      // state = {...initialState};
    }
  }
})

export default notificationSlice;