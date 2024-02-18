import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantSlice from "./restaurantSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    restaurants: restaurantSlice,
  },
});

export default appStore;
