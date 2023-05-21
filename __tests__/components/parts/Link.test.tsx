import { render } from '@testing-library/react';

import { Link } from '@src/components/parts';

describe('Link', () => {
  it('renders link with href and children', () => {
    const href = '/about';
    const text = 'About us';

    const { getByRole } = render(<Link href={href}>{text}</Link>);

    const linkElement = getByRole('link', { name: text });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe(href);
  });

  it('renders external link with target="_blank" and rel="noopener noreferrer"', () => {
    const href = 'https://example.com';
    const text = 'External link';

    const { getByRole } = render(
      <Link href={href} target='_blank'>
        {text}
      </Link>,
    );

    const linkElement = getByRole('link', { name: text });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toBe(href);
    expect(linkElement.getAttribute('target')).toBe('_blank');
    expect(linkElement.getAttribute('rel')).toBe('noopener noreferrer');
  });
});
