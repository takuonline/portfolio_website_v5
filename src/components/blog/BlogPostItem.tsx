// @ts-nocheck

import AppImage from "../Common/AppImage";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import { urlForImage } from "../../common/utils/sanity";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha } from "@mui/material";

type BlogPost = {
  title: string;
  desc: string;
  namedCategories: { title: string }[];
};

const BlogPostItem = ({ blogPost }) => {
  const shortDescription = blogPost.shortDescription[0].children[0].text;

  const router = useRouter();
  const handleOnClick = () => {
    const slug = blogPost.slug.current;

    router.push("/blog/" + slug);
  };
  const imageSrc = urlForImage(blogPost.mainImage)
    .width(1200)
    .height(627)
    .fit("fill")
    .url();

  const theme = useTheme();
  const isMdUpBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid
        container
        rowGap={4}
        columnGap={{ lg: 2 }}
        mb={{ md: 15, xs: 6 }}
        sx={{
          display: "flex",
          borderRadius: "8rem",

          pb: 6,
          border: (t) => `2px solid ${alpha(t.palette.background.paper, 0.2)}`,
          overflow: "clip",
          [theme.breakpoints.down("md")]: {
            borderRadius: "2rem",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "secondary.main",
            width: "100%",
            height: "100%",
          }}
        >
          {blogPost?.mainImage?.asset?._ref && (
            <AppImage
              showFrame={false}
              src={imageSrc}
              onClick={handleOnClick}
              // src="/static/images/savvy_shopper_image_1.png"
              alt="savvy shopper image "
              // height={2812}
              // width={5000}
              borderRadius={0}
              size={{
                lg: 12,
              }}
              maxHeight={"100%"}
              sx={{
                filter: "grayscale(100%)",
                transition: "all .7s",

                ":hover": {
                  //   transform: "translate(-1rem, -1rem)",
                  //   transition: "all .7s",
                  filter: "none",
                  cursor: "pointer",
                },
              }}
            />
          )}
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 4,
          }}
        >
          <Grid item lg={4}>
            <Typography
              onClick={handleOnClick}
              variant="body1"
              sx={{
                transition: "all .7s",
                ":hover": {
                  color: "secondary.main",
                  transition: "all .7s",
                  cursor: "pointer",
                },
              }}
            >
              {blogPost.title}
            </Typography>
          </Grid>

          {isMdUpBreakpoint && (
            <Grid item lg={7}>
              <Typography variant="body2" sx={{}}>
                {shortDescription}
              </Typography>
            </Grid>
          )}

          <Grid
            item
            lg={2}
            sx={{
              position: "relative",
            }}
          >
            {/* <IconButton
              onClick={handleOnClick}

              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translate(0, -50%)",
              }}
            >
              <AddIcon
                sx={{
                  color: "text.primary",
                  fontSize: { md: "4rem" },
                  transition: "all .7s",
                  ":hover": {
                    color: "secondary.main",
                    transition: "all .7s",
                  },
                }}
              />
            </IconButton> */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BlogPostItem;
