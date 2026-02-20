import { configureStore } from "@reduxjs/toolkit";
import palabraReducer from '../components/Redux';

export const store=configureStore({
     reducer:{

        palabra:palabraReducer
     }   
})


export type RootState=ReturnType<typeof store.getState>;

