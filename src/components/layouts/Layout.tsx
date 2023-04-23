import { Container, Footer, Header } from '@src/components/layouts';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
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
