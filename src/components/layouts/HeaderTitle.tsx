import Typography from '@mui/material/Typography';

const HeaderTitle: React.FC = () => {
  return (
    <Typography component='h2' variant='h5' color='inherit' align='center' noWrap sx={{ flex: 1 }}>
      {process.env.NEXT_PUBLIC_TITLE}
    </Typography>
  );
};

export default HeaderTitle;
