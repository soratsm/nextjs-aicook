// ナビゲーションバーのコンポーネント
// ログインしているかどうかで表示を変える

import Link from 'next/link';

const Header: React.FC = () => {
  const user = true; //useRecoilValue(userState);

  if (user) {
    return (
      <>
        <header>
          <nav>
            <Link href='/'>Home</Link> |
            <Link href='/insert'>Insert Data</Link> |
            <Link href='/privacy-policy'>プライバシーポリシー</Link>
          </nav>
        </header>
      </>
    );
  }
  return (
    <>
      <header>
        <nav>
          <Link href='/'>Home</Link> | <Link href='/about'>About</Link> |{' '}
          <Link href='/users'>Users List</Link> | <a href='/api/users'>Users API</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
