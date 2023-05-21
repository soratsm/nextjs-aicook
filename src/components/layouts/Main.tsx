import { Grid, Typography, Divider } from '@mui/material';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Main: React.FC<Props> = (props) => {
  const { title, children } = props;
  return (
    <Grid
    bgcolor={'white'}
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      <Divider />
      {children}
    </Grid>
  );
};

export default Main;
