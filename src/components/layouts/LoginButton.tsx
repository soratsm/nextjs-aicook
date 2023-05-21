import { memo } from 'react';

import Button from '@mui/material/Button';

type Props = {
  isLogin: boolean;
  onClick: () => void;
};

const LoginButton: React.FC<Props> = (props) => {
  const { isLogin, onClick } = props;
  return (
    <Button variant='outlined' size='small' onClick={onClick}>
      {isLogin ? 'Sign out' : 'Sign in'}
    </Button>
  );
};

export default memo(LoginButton);
