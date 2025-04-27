import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore from Redux Toolkit
import cartReducer from './slices/cart.slice'

// Configuring the Redux store
const appStore = configureStore({
    reducer: {
       cart:cartReducer
    }
});

// Exporting the configured store to be used in the application
export default appStore;