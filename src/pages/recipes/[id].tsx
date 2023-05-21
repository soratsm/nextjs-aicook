import Error from 'next/error';
import { useRouter } from 'next/router';

import type { GetStaticProps, GetStaticPaths } from 'next';

import { Box } from '@mui/material';

import { Layout } from '@src/components/layouts';
import type { RecipeType } from '@src/lib/types';
import { fetcher,fetcherForId } from '@src/lib/utils/fetcher';

type Props = { data: RecipeType };

const ETFDetail: React.FC<Props> = (props) => {
  const { data } = props;
  const router = useRouter();
  const title = router.query.id as string;

  //  ISR（インクリメンタル静的再生成）対策
  if (!router.isFallback && !data?.id) {
    return (
      <Layout>
        <Error statusCode={404} title={title} />;
      </Layout>
    );
  }

  return (
    <Layout mainTitle={`${data.nameja} / ${data.nameen}`}>
      <Box>
        <Box>{data.nameja}</Box>
        <Box>{data.nameen}</Box>
        <Box>{data.time}</Box>
      </Box>
    </Layout>
  );
};
export default ETFDetail;

// SSG（静的サイト生成）
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetcher<RecipeType>('recipes');
  const paths = data.map((recipe) => ({
    params: { id: recipe.id },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await fetcherForId<RecipeType>('recipes' , `${ctx.params.id as string}`);
  return {
    props: {
      data,
    },
    notFound: !data,
    revalidate: 3,
  };
};
