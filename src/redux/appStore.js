import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore from Redux Toolkit
import cartReducer from './slices/cart.slice'
import userReducer from './slices/user.slice'

// Configuring the Redux store
const appStore = configureStore({
    reducer: {
       cart:cartReducer,
       user:userReducer
    }
});

// Exporting the configured store to be used in the application
export default appStore;