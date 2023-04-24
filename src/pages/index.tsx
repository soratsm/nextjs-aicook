import type { NextPage } from 'next';

import type { RecipeType } from '@src/commons/types';
import { Layout } from '@src/components/layouts';
import { useFirestoreDataSWR } from '@src/functions/hooks';

const Home: NextPage = () => {
  const { data, loading, error } = useFirestoreDataSWR<RecipeType>('recipes');
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
