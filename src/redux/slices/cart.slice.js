import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem("cartItems");
    if (cart) return JSON.parse(cart);
    return [];
  } catch (error) {
    console.error("Error getting cart from localStorage:", error);
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getCartFromLocalStorage(), // Get from localStorage if exists
  },
  reducers: {
    addToCart: (state, action) => {
        //mutating state, modifing state
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cartItems", JSON.stringify([]));
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
