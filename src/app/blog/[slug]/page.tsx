import { sanityClient } from "../../../common/utils/sanity.server";
import { urlForImage } from "../../../common/utils/sanity";
import * as queries from "../../../common/utils/sanity-queries";
import AppBlogPage from "./AppBlogPage";
import { BlogImage } from "@/types/blogTypes";
import Box from "@mui/material/Box";
import BodyWrapper from "../../../components/Common/BodyWrapper";
import { SanityDocument } from "next-sanity";
import * as postQueries from "@/common/utils/sanity-queries";
import { Suspense } from "react";

export async function generateStaticParams() {
  const posts = await sanityClient.fetch<SanityDocument[]>(
    postQueries.blogPostQuery,
  );

  return posts.map((post) => ({
    slug: String(post.slug.current),
  }));
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  //  const preview = query.preview === 'true';
  const blog: { post: SanityDocument } = await sanityClient.fetch(
    queries.postQuery,
    {
      slug: params.slug,
    },
  );

  let imageSrc = "";
  try {
    const blogImage =
      blog.post?.mainImage?.asset?._ref && (blog.post?.mainImage as BlogImage);

    if (blogImage) {
      imageSrc = urlForImage(blogImage).fit("fillmax").url();
    }
  } catch (error) {
    console.error(error);
  }

  // if (!data?.mainImage) {
  //   return <ErrorPage statusCode={404} />;
  // }

  return (
    <Box sx={{ zIndex: 2, position: "relative" }}>
      <BodyWrapper>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <AppBlogPage post={blog.post} imageSrc={imageSrc} />
        {/* </Suspense> */}
      </BodyWrapper>
    </Box>
  );
}
