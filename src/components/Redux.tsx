import { createSlice } from "@reduxjs/toolkit";

interface PalabraState {
  value: String;
}

const initialState: PalabraState = {
  value: "hola",
};

const palabraSlice = createSlice({
  name: "palabra",
  initialState,
  reducers: {
    agregarA: (state) => {
      state.value += "a";
    },
    agregarB: (state) => {
      state.value += "B";
    },
    reiniciar: (state) => {
      state.value = "hola";
    },
  },
});

export const {agregarA, agregarB, reiniciar}=palabraSlice.actions;

export default palabraSlice.reducer;