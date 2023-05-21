import { memo } from 'react';

import type { GetStaticProps } from 'next';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';

import { Layout } from '@src/components/layouts';
import { Link, SearchBox, Star } from '@src/components/parts';
import type { RecipeType } from '@src/lib/types';
import { fetcher } from '@src/lib/utils/fetcher';

type Props = {
  data: RecipeType[];
};

const Recipes: React.FC<Props> = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <Layout mainTitle='レシピ一覧'>
      <SearchBox />
      <Divider variant='middle' />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {data.map((recipe) => (
          <>
            <ListItem alignItems='flex-start'>
              <Star id={recipe.id} />
              <Link href={`/recipes/${recipe.id}`} target='_blank' key={recipe.id}>
                {/*
                イメージは"https://bun3tou4.vercel.app/etfs"のレスポンシブデザインの各ETFの表示
                1行目:左側{recipe.nameja} / 右側<NavigateNextIcon/>
                2行目:タグ（{recipe.ingredients}内のnameのみをタグとして出力）
                3行目:{recipe.overview}
                上記を一つのListItemとする。
                フォーカス時に外枠表示＆ポインターを変更
                */}
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography >{recipe.nameja}</Typography>
                      <NavigateNextIcon />
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Typography >
                        {recipe.ingredients.map((ingredient) => (
                          <Typography  component='span' key={ingredient.name}>
                            {ingredient.name}
                          </Typography>
                        ))}
                      </Typography>
                      <br />
                      <Typography >{recipe.overview}</Typography>
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Layout>
  );
};
export default memo(Recipes);

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetcher<RecipeType>('recipes');
  return {
    props: {
      data,
    },
  };
};
