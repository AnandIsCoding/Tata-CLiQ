import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
describe('Home Component', () => {
    test('renders Indianwear Reimagined heading', () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      expect(screen.getByText(/Indianwear Reimagined/i)).toBeInTheDocument();
    });
  
    test('renders Hot Boy Fits heading', () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      );
      expect(screen.getByText(/Hot Boy Fits/i)).toBeInTheDocument();
    });
  });
