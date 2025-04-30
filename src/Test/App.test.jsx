import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import appStore from '../redux/appStore'
import React from 'react'

// Mock lazy-loaded pages and components
vi.mock('../pages/Home', () => ({ default: () => <div>Mock Home</div> }))
vi.mock('../components/Navbar', () => ({ default: () => <nav>Mock Navbar</nav> }))
vi.mock('../components/Footer', () => ({ default: () => <footer>Mock Footer</footer> }))
vi.mock('../components/ScrollToTop', () => ({ default: () => <div data-testid="scroll-to-top" /> }))

describe('App basic rendering', () => {
  it('renders Navbar, Footer and Home page at / route', async () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    )

    // Loader should show first
    expect(screen.getByAltText('loader')).toBeInTheDocument()

    // Wait for lazy components
    await waitFor(() => {
      expect(screen.getByText('Mock Home')).toBeInTheDocument()
      expect(screen.getByText('Mock Navbar')).toBeInTheDocument()
      expect(screen.getByText('Mock Footer')).toBeInTheDocument()
    })

    // ScrollToTop should be in DOM
    expect(screen.getByTestId('scroll-to-top')).toBeInTheDocument()
  })
})
