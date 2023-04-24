import { NextSeo } from 'next-seo';

import { Container, Footer, Header } from '@src/components/layouts';

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const Layout: React.FC<Props> = (props) => {
  const { title, description, children } = props;
  return (
    <>
      {
        // titleかdescriptionどちらか入ってたらNextSeoで上書き
        (title || description) && <NextSeo title={title} description={description} />
      }
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
