import NextLink from 'next/link';
import { memo } from 'react';

import MuiLink from '@mui/material/Link';

type LinkProps = {
  href: string;
  target?: string;
  children?: React.ReactNode;
};
export const Link: React.FC<LinkProps> = (props) => (
  <MuiLink
    href={props.href}
    component={NextLink}
    target={props.target || '_self'}
    rel='noopener noreferrer'
  >
    {props.children}
  </MuiLink>
);
export default memo(Link);
