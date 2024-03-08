import { createSlice } from '@reduxjs/toolkit';

const doggieSlice = createSlice({
  name: 'doggie',
  initialState: 'all',
  reducers:{
    setDog: (state, action) => action.payload,
    clearDog: () => null
  }
});


  
export const { setDog, clearDog } = doggieSlice.actions;
export  const doggieReducer = doggieSlice.reducer
