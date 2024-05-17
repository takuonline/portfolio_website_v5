export const postFields = `
  _id,
  name,
  title,
  "created":_createdAt  ,
  "updated":_updatedAt  ,
  mainImage,
  "slug": slug.current,
  "author": author->{name, image},
`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    body,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const blogPostQuery = `*[_type == "post"]{
    ...,
    "namedCategories": *[ _type == "category" &&
                        _id in ^.categories[]._ref
                        ]{ title }
}`;

export const blogPostCategoryQuery = `*[_type == "category"]`;
