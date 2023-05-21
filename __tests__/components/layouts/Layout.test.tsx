import { render, screen } from '@testing-library/react';

import { Layout } from '@src/components/layouts';

xdescribe('Layout', () => {
  test('renders header', () => {
    const mainTitle = 'Test Title';
    render(<Layout mainTitle={mainTitle}>Test Content</Layout>);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('renders hero card', () => {
    const mainTitle = 'Test Title';
    render(<Layout mainTitle={mainTitle}>Test Content</Layout>);
    const heroCard = screen.getByRole('article');
    expect(heroCard).toBeInTheDocument();
  });

  test('renders main content', () => {
    const mainTitle = 'Test Title';
    render(<Layout mainTitle={mainTitle}>Test Content</Layout>);
    const mainContent = screen.getByRole('main');
    expect(mainContent).toBeInTheDocument();
    const mainTitleElement = screen.getByRole('heading', { name: mainTitle });
    expect(mainTitleElement).toBeInTheDocument();
    const contentElement = screen.getByText(/Test Content/i);
    expect(contentElement).toBeInTheDocument();
  });

  test('renders sidebar', () => {
    render(<Layout>Test Content</Layout>);
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toBeInTheDocument();
  });
});
