// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Try to load user from localStorage
const storedUser = localStorage.getItem('user');
const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null, // ✅ set parsed user if exists
  isAuthenticated: storedUser ? true : false,       // ✅ set auth status
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload)); // ✅ save to localStorage
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user'); // ✅ clear from localStorage
    },
  },
});

// Export actions
export const { setUser, logoutUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
