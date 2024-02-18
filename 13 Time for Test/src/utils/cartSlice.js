import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCartPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { defaultPrice, price } = action.payload?.card?.info;
      console.log("defaultPrice", defaultPrice);
      console.log("price", price);
      if (defaultPrice) {
        state.totalCartPrice += defaultPrice / 100;
      } else {
        state.totalCartPrice += price / 100;
      }
      state.items.push(action.payload);
    },
    incrementCartItemQty: (state, action) => {
      state.items;
    },
    decrementCartItemQty: (state, action) => {},
    removeItem: (state, action) => {
      const i = action.payload;
      const { defaultPrice, price } = state.items[i].card?.info;
      if (state.totalCartPrice > 0) {
        if (defaultPrice) {
          state.totalCartPrice -= defaultPrice / 100;
        } else {
          state.totalCartPrice -= price / 100;
        }
      }
      state.items.splice(i, 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.totalCartPrice = 0;
    },
  },
});

console.log(cartSlice.actions);

export const a = "A";

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
