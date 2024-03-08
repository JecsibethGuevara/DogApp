import { configureStore } from '@reduxjs/toolkit';
import { filterReducer} from './filter';
import {doggieReducer} from './reducer';



const store = configureStore({
  reducer: {
    doggie: doggieReducer,
    filter: filterReducer
  }
});



export default store;