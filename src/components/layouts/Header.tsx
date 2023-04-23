// ナビゲーションバーのコンポーネント
// ログインしているかどうかで表示を変える

import Link from 'next/link';
import React from 'react';
import { useRecoilValue } from 'recoil';

const Header: React.FC = () => {
  const user = true; //useRecoilValue(userState);

  if (user) {
    return (
      <>
        <header>
          <nav>
            <Link href='/'>Home</Link> | <Link href='/about'>About</Link> |{' '}
            <Link href='/users'>Users List</Link> | <a href='/api/users'>Users API</a> |{' '}
            <Link href='/posts'>Posts</Link> | <Link href='/posts/new'>New Post</Link> |{' '}
            <Link href='/profile'>Profile</Link> | <Link href='/logout'>Logout</Link>
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
