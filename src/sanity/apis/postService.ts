// src/sanity/fetchers/postFetcher.ts
import {client} from '../client';
import { POSTS_QUERY } from '../queries/postQueries';

export async function getPosts() {
  return await client.fetch(POSTS_QUERY);
}
