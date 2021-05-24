import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const itemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.items];
      if (itemIndex >= 0) {
        if (newCart[itemIndex].quantity > 1) {
          newCart[itemIndex].quantity -= 1;
        } else {
          newCart.splice(itemIndex, 1);
        }
      } else {
        console.warn("Item Not Found");
      }
      return {
        ...state,
        items: newCart,
      };
    }
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total , item) => total + item.price , 0)
export default basketSlice.reducer;
