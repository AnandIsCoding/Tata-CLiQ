import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar'
import appStore from '../redux/appStore'
import React from 'react'

// Mock hooks and modules
vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    user: null,
    isAuthenticated: false,
  }),
}))

vi.mock('../utils/menuData', () => ({
  __esModule: true,
  default: () =>
    Promise.resolve({
      Categories: { Men: [{ id: 1, title: 'T-Shirt' }] },
      Brands: { Top: ['Nike'] },
    }),
}))

vi.mock('../mini-Compo/LoginPopup', () => ({
  default: () => <div>LoginPopup</div>,
}))

vi.mock('../mini-Compo/SearchResultTab', () => ({
  default: () => <div>SearchResultTab</div>,
}))

describe('Navbar basic render', () => {
  it('renders search input and icons', () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByPlaceholderText(/search for products/i)).toBeInTheDocument()
    expect(screen.getByText(/sign in \/ sign up/i)).toBeInTheDocument()
    expect(screen.getByAltText(/navbar-logo/i)).toBeInTheDocument()
  })
})
