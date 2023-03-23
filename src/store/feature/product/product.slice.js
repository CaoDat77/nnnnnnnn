import { createSlice } from "@reduxjs/toolkit";

import { menus } from "../../../data/dishData";

const initialState = [];

const dishSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addDishToCart: (state, { payload: dishId }) => {
      const dishIndex = state.findIndex((id) => id == dishId);
      console.log(state);
      if (!dishIndex) {
        alert("da co trong vao gio hang");
        return [...state];
      } else {
        alert("da them vao gio hang");
        const newState = [...state, dishId];
        return newState;
      }
    },

    removeDish: (state, action) => {
      const newState = state.filter((item) => item !== action.payload);
      return newState;
    },
  },
});

export const addCartReducer = dishSlice.reducer;
export const { addDishToCart, removeDish } = dishSlice.actions;

export const dishToCart = (state) => {
  const dishCart = state.product;
  const dishItemCart = dishCart.map((item) => {
    return menus.find((dish) => dish.id == item);
  });

  return {
    dishItemCart,
  };
};
