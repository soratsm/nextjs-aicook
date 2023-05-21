import { render, screen } from '@testing-library/react';

import { Theme } from '@src/components/layouts';

xdescribe('Theme', () => {
  test('renders children with custom theme', () => {
    const testText = 'Test Text';
    render(
      <Theme>
        <div>{testText}</div>
      </Theme>,
    );
    const textElement = screen.getByText(testText);
    expect(textElement).toBeInTheDocument();
    const themeProvider = screen.getByTestId('mui-theme-provider');
    expect(themeProvider).toHaveStyle({
      fontFamily: ['Roboto', '"Noto Sans JP"', '"Helvetica"', 'Arial', 'sans-serif'].join(','),
      backgroundColor: '#fafaf5',
      color: '#1c1a10',
    });
  });
});
