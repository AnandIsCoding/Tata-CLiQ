import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import Cart from '../pages/Cart'
import { configureStore } from '@reduxjs/toolkit'
import appStore from '../redux/appStore'
import React from 'react'

// Mock ProductCard
vi.mock('../mini-Compo/ProductCard', () => ({
  default: ({ product }) => <div>{product.title}</div>,
}))

// Utility to create store with cart state
const renderWithStore = (cartItems = []) => {
  const store = configureStore({
    reducer: {
      cart: () => ({ items: cartItems }),
    },
  })

  return render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    </Provider>
  )
}

describe('Cart Component', () => {
  it('renders "No Items Found" when cart is empty', () => {
    renderWithStore([])

    expect(screen.getByText(/no items found/i)).toBeInTheDocument()
  })
})
