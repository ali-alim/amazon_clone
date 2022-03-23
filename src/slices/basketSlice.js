import { createSlice } from "@reduxjs/toolkit";
import e from "express";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
      (basketItem) => basketItem.id === action.payload.id);

      let newBasket = [...state.items]

      if(index >= 0) {
        //if item exists in the basket, remove it..
        newBasket.splice(index, 1)
      } else { //if index = -1
        console.warn(
          `Cant remove product(id: ${action.payload.id}) as its not in the basket`
        )
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
