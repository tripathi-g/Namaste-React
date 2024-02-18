import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    items: [],
    menus: {},
  },
  reducers: {
    setRestaurants: (state, action) => {
      state.items = action.payload;
    },
    addNewRestaurantMenu: (state, action) => {
      const id = action.payload.id;
      state.menus[id] = action.payload.data;
    },
  },
});

export const { setRestaurants, addNewRestaurantMenu } = restaurantSlice.actions;

export default restaurantSlice.reducer;
