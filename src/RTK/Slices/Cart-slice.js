import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    addToCart: (state, action) => {
      const FindProducts = state.find(
        (product) => product.id === action.payload.id
      );
      if (FindProducts) {
        FindProducts.quantity += 1;
      } else {
        const ProductClone = { ...action.payload, quantity: 1 };
        state.push(ProductClone);
      }
    },
    DeleteFromCart: (state, action) => {
      const FindProducts = state.find(
        (product) => product.id === action.payload.id
      );
      if (FindProducts && FindProducts.quantity !== 1) {
        FindProducts.quantity = FindProducts.quantity - 1;
      } else {
        return state.filter((product) => product.id != action.payload.id);
      }
    },
    Clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, DeleteFromCart, Clear } = CartSlice.actions;
export default CartSlice.reducer;
