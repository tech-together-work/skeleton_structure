// src/sanity/queries/postQueries.ts
export const POSTS_QUERY = `*[_type == "post"]{
    _id,
    image,
    title
}`;
