import { render, screen } from '@testing-library/react';

import { HeaderTitle } from '@src/components/layouts';

describe('HeaderTitle', () => {
  test('renders header title', () => {
    render(<HeaderTitle />);
    const headerTitle = screen.getByRole('heading', { name: process.env.NEXT_PUBLIC_TITLE });
    expect(headerTitle).toBeInTheDocument();
  });
});
