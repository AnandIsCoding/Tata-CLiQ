import React from 'react'
import { render, screen } from '@testing-library/react'
import Banner from '../mini-Compo/Banner'
import { MemoryRouter } from 'react-router-dom'

describe('Banner Component', () => {
  it('renders the banner image', () => {
    render(
      <MemoryRouter>
        <Banner
          imageUrl="https://example.com/banner.jpg"
          redirect="/redirect-path"
        />
      </MemoryRouter>
    )

    const image = screen.getByAltText('Banner')
    expect(image).toBeInTheDocument()
  })
})
