import Link from 'next/link';
import { memo } from 'react';

import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  const today = new Date();
  return (
    <Box component='footer' sx={{  py: 6 }}>
      <Container maxWidth='lg'>
        <Link color='inherit' href={'/privacy-policy'} style={{ textDecoration: 'none' }}>
          プライバシーポリシー
        </Link>
        <Typography>
          {`© ${today.getFullYear()} ${process.env.NEXT_PUBLIC_TITLE}. All rights reserved`}
        </Typography>
      </Container>
    </Box>
  );
};
export default memo(Footer);
