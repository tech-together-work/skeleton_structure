import { client } from '../client';
import { POSTS_QUERY } from '../queries/postQueries';
import { Post } from '../types/post';

class PostService {
  async getPosts(): Promise<Post[]> {
    return await client.fetch<Post[]>(POSTS_QUERY);
  }
}

export default new PostService();
