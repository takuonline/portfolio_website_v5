import { sanityClient } from "../../common/utils/sanity.server";
import * as postQueries from "../../common/utils/sanity-queries";
import Blog from "@/app/blog/Blog";
import { SanityDocument } from "next-sanity";

export default async function BlogPage() {
  const posts = await sanityClient.fetch<SanityDocument[]>(postQueries.blogPostQuery);
  const rawCategories = await sanityClient.fetch(
    postQueries.blogPostCategoryQuery,
  );

  const processedCategories = rawCategories.map((v: { title: string }) => ({
    title: v.title,
    isSelected: false,
  }));

  return <Blog posts={posts} processedCategories={processedCategories} />;
}
