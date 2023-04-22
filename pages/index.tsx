import type { NextPage } from 'next';
// type
import { PostType } from '../commons/types';
// service
import PostService from '../functions/services/PostService';
// hooks
import usePostListSwr from '../functions/hooks/usePostListSwr';
// component

const Home: NextPage<{
  staticPostList: PostType[];
}> = ({ staticPostList }) => {
  const postList = usePostListSwr(staticPostList);
  console.log(postList);

  return (
    <div className='flex'>
      {postList!.map((post) => {
        return (
          <div key={post.id} className='w-1/3 p-4'>
            <article className='shadow-sm shadow-gray-200'>
              <div>
                <img className='w-full h-56 object-cover' src={post.featuredImage.url} />{' '}
                {/* 詳細編で<Image />に変える */}
              </div>
              <div className='py-4 px-5'>
                <span>{post.category.name}</span>
                <h1 className='font-bold'>{post.title}</h1>
                <p>{post.excerpt}</p> {/* 詳細編でタグは消す */}
                <span>{post.date}</span>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const staticPostList = await PostService.getList(); // postListをとってくる
  return {
    props: {
      staticPostList,
    },
    revalidate: 10,
  };
}

export default Home;
