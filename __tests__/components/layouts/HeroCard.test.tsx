import { render, screen } from '@testing-library/react';

import { HeroCard } from '@src/components/layouts';

xdescribe('HeroCard', () => {
  test('renders Paper component with correct styles', () => {
    render(<HeroCard />);
    const paperComponent = screen.getByRole('article');
    expect(paperComponent).toHaveStyle({
      position: 'relative',
      backgroundColor: 'grey.800',
      color: '#fff',
      marginBottom: 4,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    });
  });
});
