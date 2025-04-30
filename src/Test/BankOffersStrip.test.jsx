import React from 'react';
import { render, screen } from '@testing-library/react';
import BankOffersStrip from '../mini-Compo/BankOffersStrip';

describe('BankOffersStrip Component', () => {
  it('renders both offer images', () => {
    render(<BankOffersStrip />);

    const offer1 = screen.getByAltText('Offer 1');
    const offer2 = screen.getByAltText('Offer 2');

    expect(offer1).toBeInTheDocument();
    expect(offer2).toBeInTheDocument();
  });
});
