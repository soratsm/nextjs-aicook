import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginButton } from '@src/components/layouts';

describe('LoginButton', () => {
  test('renders sign in button when user is not logged in', () => {
    const isLogin = false;
    const handleClick = jest.fn();
    render(<LoginButton isLogin={isLogin} onClick={handleClick} />);
    const signInButton = screen.getByRole('button', { name: /sign in/i });
    expect(signInButton).toBeInTheDocument();
  });

  xtest('calls onClick handler when button is clicked', () => {
    const isLogin = true;
    const handleClick = jest.fn();
    render(<LoginButton isLogin={isLogin} onClick={handleClick} />);
    const signOutButton = screen.getByRole('button', { name: /sign out/i });
    userEvent.click(signOutButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
