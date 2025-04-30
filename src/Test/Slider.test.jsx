import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from '../mini-Compo/Slider';

describe('Slider Component', () => {
  it('renders 6 slides', () => {
    render(<Slider />);
    const slides = screen.getAllByTestId('slide');
    expect(slides.length).toBe(6);
  });

  it('renders navigation buttons', () => {
    render(<Slider />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2); // Prev and Next
  });
});
