import { render, screen } from '@testing-library/react';

import { HeaderMenu } from '@src/components/layouts';

describe('HeaderMenu', () => {
  it('renders all sections with loginMenu=false', () => {
    const isLogin = false;
    render(<HeaderMenu isLogin={isLogin} />);
    const recipeLink = screen.getByRole('link', { name: 'レシピ一覧' });
    const foodLink = screen.getByRole('link', { name: '食材一覧' });
    expect(recipeLink).toBeInTheDocument();
    expect(foodLink).toBeInTheDocument();
  });

  it('renders only sections with loginMenu=true when isLogin=true', () => {
    const isLogin = true;
    render(<HeaderMenu isLogin={isLogin} />);
    const insertLink = screen.getByRole('link', { name: 'レシピ登録' });
    const deleteLink = screen.getByRole('link', { name: 'レシピ削除' });
    expect(insertLink).toBeInTheDocument();
    expect(deleteLink).toBeInTheDocument();
  });

  it('does not render sections with loginMenu=true when isLogin=false', () => {
    const isLogin = false;
    render(<HeaderMenu isLogin={isLogin} />);
    const insertLink = screen.queryByRole('link', { name: 'レシピ登録' });
    const deleteLink = screen.queryByRole('link', { name: 'レシピ削除' });
    expect(insertLink).not.toBeInTheDocument();
    expect(deleteLink).not.toBeInTheDocument();
  });
});
