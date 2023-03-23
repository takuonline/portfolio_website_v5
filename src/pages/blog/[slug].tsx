import Grid from "@mui/material/Grid";
import AppImage from "../../components/Common/AppImage";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import BodyWrapper from "../../components/Common/BodyWrapper";
import ContactMe from "../../components/ContactMe/ContactMe";
import CustomDivider from "../../components/Common/CustomDivider";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { sanityClient } from "../../common/utils/sanity.server";
import * as queries from "../../common/utils/sanity-queries";
import { useEffect, useState } from "react";
import { urlForImage } from "../../common/utils/sanity";
import PostBody from "../../components/blog/PostBody";
import CustomNavbar from "../../components/NavBar/CustomNavbar";
import Button from "@mui/material/Button";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import Box from "@mui/material/Box";
import useNavBar from "@/common/custom-hooks/useNavbar";
import Container from "@mui/material/Container";

const ProjectBlogPage = ({ post: data }: Props) => {
  const [formattedDate, setFormattedDate] = useState<string>("");

  try {
    useEffect(
      () => setFormattedDate(new Date(data?.created).toLocaleDateString()),
      []
    );
  } catch (error) {
    setFormattedDate("A good day");
  }

  const router = useRouter();
  let imageSrc = "";
  try {
    imageSrc = urlForImage(data?.mainImage?.asset?._ref && data?.mainImage)
      .fit("fillmax")
      .url();
  } catch (error) {
    console.error(error);
  }

  const fallBackItem = (
    <Typography
      variant={"body2"}
      sx={{
        mt: 3,
      }}
    >
      {"Loading..."}
    </Typography>
  );

  const IconSize = "1.5rem";
  const btnStyle = {
    p: 0,

    ":active": {
      // color:"secondary.main",
      opacity: 0.7,
      backgroundColor: "background.default",
    },
    ":hover": {
      backgroundColor: "background.default",
    },
    span: {
      display: "none",
    },
  };


  if (!router.isFallback && !data?.mainImage) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    < >
      {router.isFallback && fallBackItem}

      {!router.isFallback && (
        <Box
          sx={{
            zIndex: 2,
            position: "relative",
          }}
        >

          <BodyWrapper>
            <article>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  pt: 30,
                  mb: 25,
                }}
                columnGap={{ md: 5 }}
                rowGap={{ md: 20 }}
              >
                <Grid item md={4}>
                  <Typography variant={"h3"} >{data.title}</Typography>

                  <Typography
                    variant={"body2"}
                    sx={{
                      mt: 3,
                    }}
                  >
                    {data.author.name}
                  </Typography>

                  <Stack
                    direction="row"
                    mb={{ md: 0, xs: 10 }}
                    mt={{ xs: 1 }}
                    sx={{
                      display: "flex",
                      alignItems: "end",
                      columnGap: 1,
                    }}
                  >
                    <Typography
                      variant={"body2"}
                      sx={{
                        mr: "40%",
                      }}
                    >
                      {"Share: "}
                    </Typography>

                    <Button
                      variant={"text"}
                      sx={{
                        ...btnStyle,
                      }}
                    >
                      {" "}
                      <IoLogoLinkedin size={IconSize} />{" "}
                    </Button>
                    <Button
                      variant={"text"}
                      sx={{
                        ...btnStyle,
                      }}
                    >
                      {" "}
                      <IoLogoFacebook size={IconSize} />{" "}
                    </Button>

                    <Button
                      variant={"text"}
                      sx={{
                        ...btnStyle,
                      }}
                    >
                      <IoLogoTwitter size={IconSize} />{" "}
                    </Button>
                  </Stack>

                  {/* <PrimaryBtn sx={{ m: "auto" }} onClick={() => {}} /> */}
                </Grid>

                <Grid item md={7}>
                  <AppImage
                    showFrame={false}
                    src={imageSrc}
                    alt={data.title}
                    // height={2812}
                    // width={5000}
                    borderRadius={0}
                    size={{
                      lg: 10,
                    }}
                    maxHeight={"100%"}
                    sx={
                      {
                        // width: { xs: "100vw", sm: "auto" },
                      }
                    }
                  />
                </Grid>

                {/* //////////////////////////////////////Row 2/////////////////////////////////////////////////////////////// */}

                <Grid
                  item
                  md={4}
                  xs={12}
                  sx={{
                    display: "flex",

                    alignItems: "start",
                    justifyContent: { md: "end", xs: "start" },
                    my: { xs: 9, md: 0 },
                    mt: { xs: 12, md: 0 },

                    // textAlign: "right",
                  }}
                >
                  <Typography variant="body2" >{formattedDate}</Typography>
                </Grid>

                <Grid
                  item
                  md={7}
                  xs={12}
                  sx={{
                    pr: { md: 20 },
                    width: "50%",
                    whiteSpace: "pre-line",
                  }}
                >
                  <PostBody body={data.body} />
                </Grid>
              </Grid>
            </article>
          </BodyWrapper>
          <ContactMe />{" "}
        </Box>
      )}
    </>
  );
};

export default ProjectBlogPage;

export const getClient = (preview: boolean) =>
  preview ? sanityClient : sanityClient;

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>["props"];

type GetStaticPropsType = {
  params: { slug: string };
  preview: boolean;
};

export async function getStaticProps({
  params,
  preview = false,
}: GetStaticPropsType) {
  const { post } = await getClient(preview).fetch(queries.postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      post,
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60 * 60 * 24,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(queries.postSlugsQuery);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}
