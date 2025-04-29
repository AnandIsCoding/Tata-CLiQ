import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore from Redux Toolkit
import cartReducer from './slices/cart.slice'
import wishlistReducer from './slices/wishlist.slice'

// Configuring the Redux store
const appStore = configureStore({
    reducer: {
       cart:cartReducer,
       wishlist:wishlistReducer
    }
});

// Exporting the configured store to be used in the application
export default appStore;