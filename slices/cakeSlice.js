import toolkit from "@reduxjs/toolkit";
const {createSlice} = toolkit;
const initialState = {
    cakes : 10,
}
const cakeSlice = createSlice({
  name: "cakes",
  initialState,
  reducers: {
    addCake: (state) => {
      state.cakes -= 1;
    },
    orderCake: (state, payload) => {
      state.cakes -= payload;
    },
  },
});

export const { addCake, orderCake } = cakeSlice.actions;
export default cakeSlice.reducer;
