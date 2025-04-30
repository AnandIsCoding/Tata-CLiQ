import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Profile from '../pages/Profile';
import { useAuth0 } from '@auth0/auth0-react';

// Mock Auth0 hook
vi.mock('@auth0/auth0-react', () => ({
  useAuth0: vi.fn(),
}));

describe('Profile Component', () => {
  test('displays login prompt when user is not logged in', () => {
    useAuth0.mockReturnValue({ user: null });

    render(<Profile />);
    expect(screen.getByText(/please login to create account/i)).toBeInTheDocument();
  });

  test('displays user info when user is logged in', () => {
    useAuth0.mockReturnValue({
      user: {
        name: 'Jane Doe',
        email: 'jane@example.com',
        picture: 'https://example.com/profile.jpg',
      },
    });

    render(<Profile />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/profile.jpg');
  });
});
