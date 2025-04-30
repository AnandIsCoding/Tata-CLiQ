import { render, screen } from '@testing-library/react';
import Orders from '../pages/Orders';
import React from 'react';

describe('Orders Component', () => {
  test('renders No Orders Found message', () => {
    render(<Orders/>);
    expect(screen.getByText(/No Orders Found/i)).toBeInTheDocument();
  });
});
