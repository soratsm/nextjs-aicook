import type { NextPage } from 'next';

import { Layout } from '@src/components/layouts';
import { useGetFirestoreSWR } from '@src/lib/hooks';
import type { RecipeType } from '@src/lib/types';

const Home: NextPage = () => {
  const { data, loading, error } = useGetFirestoreSWR<RecipeType>('recipes');
  console.log(data);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error!!</div>;
  return (
    <Layout>
      <div>
        {data.map((recipe) => (
          <>
            <div key={recipe.nameja}>{recipe.nameja}</div>
            <div key={recipe.calories}>{recipe.calories}</div>
          </>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
