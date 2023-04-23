// メインのcontainerコンポーネント

import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container: React.FC<Props> = (props) => {
  const { children } = props;
  const classes = useStyles();
  return <Box className={classes.container}>{children}</Box>;
};

export default Container;

// styles
const useStyles = makeStyles({
  container: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '0 1.0875rem 1.45rem',
  },
});
