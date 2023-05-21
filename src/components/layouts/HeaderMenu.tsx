import { Toolbar, Link } from '@mui/material';

const sections: ReadonlyArray<{
  title: string;
  url: string;
  loginMenu: boolean;
}> = [
  { title: 'レシピ一覧', url: '/recipes', loginMenu: false },
  { title: '食材一覧', url: '/foods', loginMenu: false },
  { title: 'レシピ登録', url: '/insert', loginMenu: true },
  { title: 'レシピ削除', url: '/delete', loginMenu: true },
  ];

type Props = {
  isLogin: boolean;
};

const HeaderMenu: React.FC<Props> = (props) => {
  const { isLogin } = props;
  return (
    <Toolbar
      component='nav'
      variant='dense'
      sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
    >
      {sections.map(
        (section) =>
          // loginMenu=falseは常に表示
          // loginMenu=trueの場合はuser=tureの時のみ表示
          (!section.loginMenu || (section.loginMenu && isLogin)) && (
            <Link
              color='inherit'
              noWrap
              key={section.title}
              variant='body2'
              href={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          ),
      )}
    </Toolbar>
  );
};

export default HeaderMenu;
