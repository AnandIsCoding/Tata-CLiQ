import { createSlice } from "@reduxjs/toolkit";

const getWishlistFromLocalStorage = () => {
  try {
    const wishlist = localStorage.getItem("wishlistItems");
    if (wishlist) return JSON.parse(wishlist);
    return [];
  } catch (error) {
    console.log("Error in getting wishlist from localStorage ---->> ", error);
    return [];
  }
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: getWishlistFromLocalStorage(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("wishlistItems", JSON.stringify(state.items));
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("wishlistItems", state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
