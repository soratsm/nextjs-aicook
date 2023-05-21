import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid, Paper, Typography, Stack, Link } from '@mui/material';

const sections: Readonly<{
  title: string;
  description: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
  }>;
}> = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  social: [{ name: 'Twitter', icon: TwitterIcon }],
};

type Props = {
  tags: string[];
};

const Sidebar: React.FC<Props> = (props) => {
  const { tags } = props;
  const { title, description, social } = sections;

  return (
    <Grid bgcolor={'white'} item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant='h6' gutterBottom sx={{ mt: 3 }}>
        チャットでアレンジ
      </Typography>
      <Typography variant='h6' gutterBottom sx={{ mt: 3 }}>
        タグクラウド
      </Typography>
      <Typography variant='h6' gutterBottom sx={{ mt: 3 }}>
        シェア
      </Typography>
      {social.map((network) => (
        <Link display='block' variant='body1' href='#' key={network.name} sx={{ mb: 0.5 }}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
