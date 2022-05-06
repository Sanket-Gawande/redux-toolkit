import toolkit from "@reduxjs/toolkit";
const { configureStore } = toolkit;
// import {useDispatch , useSelector} from "react-redux"
// import redux from "redux"

import cakeReducer, { addCake, orderCake } from "./slices/cakeSlice.js";

const store = configureStore({
  reducer: {
    cakeStore: cakeReducer,
  },
});
