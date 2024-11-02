// src/sanity/fetchers/postFetcher.ts
import { client } from '../client';
import { POSTS_QUERY } from '../queries/postQueries';
import { Post } from '../types/post';

export async function getPosts() {
  return await client.fetch<Post[]>(POSTS_QUERY);
}
