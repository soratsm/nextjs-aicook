import useSWR from "swr";
// const
import { WpGraphQlPostConst } from "../../commons/constants/WpGraphQlConst";
// type
import { PostType } from "../../commons/types";
// service
import PostService from "../services/PostService";

const usePostListSwr = (staticPostList: PostType[]) => {
  const { data: postList } = useSWR(
    WpGraphQlPostConst.list,
    PostService.getList,
    { fallbackData: staticPostList }
  );
  return postList;
};

export default usePostListSwr;
