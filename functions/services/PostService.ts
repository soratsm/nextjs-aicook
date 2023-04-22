// type
import { PostType } from "../../commons/types";
// repository
import RepositoryFactory from "../repositories/RepositoryFactory";

class PostService {
  static async getList(): Promise<PostType[]> {
  try {
    const res = await RepositoryFactory.post.getList();
    return res.data.data.posts.edges.map((data: PostType) => {
      return data;
    });
  } catch (error) {
    console.error(error);
      return []; // エラーだった場合は空のpostListにする
    }
  }
}

export default PostService;
