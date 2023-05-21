import { NextSeo } from 'next-seo';

import { Container, Grid } from '@mui/material';

import { Footer, Header, HeroCard, Theme, Sidebar, Main } from '@src/components/layouts';
type Props = {
  children: React.ReactNode;
  mainTitle?: string;
  title?: string;
  description?: string;
};

const tags = ['パスタ', 'じゃがいも'];

const Layout: React.FC<Props> = (props) => {
  const { mainTitle, title, description, children } = props;
  return (
    <>
      {
        // titleかdescriptionどちらか入ってたらNextSeoで上書き
        (title || description) && <NextSeo title={title} description={description} />
      }
      <Theme>
        <Header />
        <HeroCard />
        <Container maxWidth='lg'>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title={mainTitle}>{children}</Main>
            <Sidebar tags={tags} />
          </Grid>
        </Container>
        <Footer />
      </Theme>
    </>
  );
};

export default Layout;
