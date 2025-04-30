import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import SpecificCategory from '../pages/SpecificCategory';
import { useParams } from 'react-router-dom';

// Mock useParams
vi.mock('react-router-dom', () => ({
  useParams: () => ({ category: 'mens-clothing' }),
}));

describe('SpecificCategory Component', () => {
  it('renders the category name', () => {
    render(<SpecificCategory />);
    expect(screen.getByText(/mens-clothing/i)).toBeInTheDocument();
  });

  it('renders Filters section', () => {
    render(<SpecificCategory />);
    expect(screen.getByText(/Filters/i)).toBeInTheDocument();
  });
});
