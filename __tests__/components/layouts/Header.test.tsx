import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from '@src/components/layouts';

describe('Header', () => {
  test('renders header title', () => {
    render(<Header />);
    const headerTitle = screen.getByRole('heading', { name: process.env.NEXT_PUBLIC_TITLE });
    expect(headerTitle).toBeInTheDocument();
  });

  test('toggles login state when login button is clicked', () => {
    render(<Header />);
    const loginButton = screen.getByRole('button', { name: /sign out/i });
    userEvent.click(loginButton);
  });
});
