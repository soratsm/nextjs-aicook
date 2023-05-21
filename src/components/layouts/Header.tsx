import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Toolbar, Box, IconButton } from '@mui/material';

import { HeaderTitle, LoginButton, HeaderMenu } from './';

const Header: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); //useRecoilValue(userState);
  const onClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Box bgcolor={'white'}>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <HeaderTitle />
        <IconButton>
          <SearchIcon />
        </IconButton>
        <LoginButton isLogin={isLogin} onClick={onClick} />
      </Toolbar>
      <HeaderMenu isLogin={isLogin} />
    </Box>
  );
};

export default Header;
