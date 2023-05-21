import { memo } from 'react';

import StarsIcon from '@mui/icons-material/Stars';
import { IconButton } from '@mui/material';
type Props = {
  id: string;
};
export const Link: React.FC<Props> = (props) => {
  const { id } = props;
  return (
    <IconButton edge='end' aria-label='delete'>
      <StarsIcon />
    </IconButton>
  );
};
export default memo(Link);
