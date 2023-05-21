import { render, screen } from '@testing-library/react';

import { Main } from '@src/components/layouts';

describe('Main', () => {
  test('renders title and children', () => {
    const title = 'Test Title';
    const children = <div>Test Children</div>;
    render(<Main title={title}>{children}</Main>);
    const titleElement = screen.getByRole('heading', { name: title });
    expect(titleElement).toBeInTheDocument();
    const childrenElement = screen.getByText(/Test Children/i);
    expect(childrenElement).toBeInTheDocument();
  });
});
