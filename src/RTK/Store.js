import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/Cart-slice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
