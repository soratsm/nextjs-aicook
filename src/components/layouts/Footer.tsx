import Link from 'next/link';
import { memo } from 'react';

import { Box, Typography } from '@mui/material';

const Footer = () => {
  const today = new Date();
  return (
    <Box>
      <Link href={'/privacy-policy'} style={{ textDecoration: 'none' }}>
        プライバシーポリシー
      </Link>
      <Typography>{`© ${today.getFullYear()} ${
        process.env.NEXT_PUBLIC_TITLE
      }. All rights reserved`}</Typography>
    </Box>
  );
};
export default memo(Footer);
