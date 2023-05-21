import { render, screen } from '@testing-library/react';

import { Sidebar } from '@src/components/layouts';

xdescribe('Sidebar', () => {
  test('renders about section', () => {
    const tags = ['Test Tag 1', 'Test Tag 2'];
    render(<Sidebar tags={tags} />);
    const aboutTitle = screen.getByRole('heading', { name: /about/i });
    expect(aboutTitle).toBeInTheDocument();
    const aboutDescription = screen.getByText(/Etiam porta sem malesuada magna mollis euismod/i);
    expect(aboutDescription).toBeInTheDocument();
    const twitterIcon = screen.getByRole('img', { name: /twitter/i });
    expect(twitterIcon).toBeInTheDocument();
  });

  test('renders tag cloud', () => {
    const tags = ['Test Tag 1', 'Test Tag 2'];
    render(<Sidebar tags={tags} />);
    const tagCloudTitle = screen.getByRole('heading', { name: /tag cloud/i });
    expect(tagCloudTitle).toBeInTheDocument();
    const tagElements = screen.getAllByRole('listitem');
    expect(tagElements).toHaveLength(tags.length);
    tags.forEach((tag, index) => {
      const tagElement = tagElements[index];
      expect(tagElement).toHaveTextContent(tag);
    });
  });
});
