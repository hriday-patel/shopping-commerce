import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
        state.items.push(action.payload);
        state.count = state.count + 1;
        state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name != action.payload.name
      );
      state.count = state.count - 1;
      state.total -= action.payload.count * (action.payload.price);
    },
    addMore: (state, action) => {
      state.total += action.payload.price;
      state.items.forEach((item) =>
        item.name == action.payload.name ? (item.count += 1) : ""
      );
    },
    removeMore: (state, action) => {
      state.total -= action.payload.price;
      state.items.forEach((item) =>
        item.name == action.payload.name ? (item.count -= 1) : ""
      );
    },
    clearCart : (state) => {
        state.items.forEach((item) => item.count = 1);
        state.items = [];
        state.count = 0;
        state.total = 0;
    }
  },
});

export const { addToCart, removeFromCart, addMore, removeMore , clearCart} =
  cartSlice.actions;

export default cartSlice.reducer;
