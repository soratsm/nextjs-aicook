import { render } from '@testing-library/react';

import { Footer } from '@src/components/layouts';

describe('Footer', () => {
  it('should render the privacy policy link', () => {
    const { getByText } = render(<Footer />);
    const privacyPolicyLink = getByText('プライバシーポリシー');
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(privacyPolicyLink).toHaveAttribute('href', '/privacy-policy');
  });

  it('should render the current year and app title', () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
    const appTitle = process.env.NEXT_PUBLIC_TITLE;
    const expectedText = `© ${currentYear} ${appTitle}. All rights reserved`;
    const copyrightText = getByText(expectedText);
    expect(copyrightText).toBeInTheDocument();
  });
});
