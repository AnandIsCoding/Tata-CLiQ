import React from 'react';
import { render, screen } from '@testing-library/react';
import Wishlist from '../pages/Wishlist';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Dummy reducer for wishlist
const emptyWishlistStore = configureStore({
  reducer: {
    wishlist: () => ({ items: [] }),
  },
});

describe('Wishlist Component', () => {
  it('shows message when wishlist is empty', () => {
    render(
      <Provider store={emptyWishlistStore}>
        <Wishlist />
      </Provider>
    );
    expect(screen.getByText(/No Items Found in your Wishlist/i)).toBeInTheDocument();
  });
});
