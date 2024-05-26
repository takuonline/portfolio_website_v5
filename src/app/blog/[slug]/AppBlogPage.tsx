"use client";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import PostBody from "../../../components/blog/PostBody";

import AppImage from "../../../components/Common/AppImage";

import { SanityDocument } from "next-sanity";

export default function AppBlogPage(props: {
  post: SanityDocument;
  imageSrc: string;
}) {
  console.log(props.post, props.imageSrc);

  const { post: data } = props;
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    try {
      setFormattedDate(new Date(data?.created).toLocaleDateString());
    } catch (error) {
      setFormattedDate("A good day");
    }
  }, [data?.created]);

  return (
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
          <Typography variant="h3">{data.title}</Typography>
          <Typography variant="body2" sx={{ mt: 3 }}>
            {data.author.name}
          </Typography>
          <Stack
            direction="row"
            mb={{ md: 0, xs: 10 }}
            mt={{ xs: 1 }}
            sx={{ display: "flex", alignItems: "end", columnGap: 1 }}
          >
            <Typography variant="body2" sx={{ mr: "40%" }}>
              Share:
            </Typography>
            <Button
              variant="text"
              sx={{
                p: 0,
                ":active": {
                  opacity: 0.7,
                  backgroundColor: "background.default",
                },
                ":hover": { backgroundColor: "background.default" },
              }}
            >
              <IoLogoLinkedin size="1.5rem" />
            </Button>
            <Button
              variant="text"
              sx={{
                p: 0,
                ":active": {
                  opacity: 0.7,
                  backgroundColor: "background.default",
                },
                ":hover": { backgroundColor: "background.default" },
              }}
            >
              <IoLogoFacebook size="1.5rem" />
            </Button>
            <Button
              variant="text"
              sx={{
                p: 0,
                ":active": {
                  opacity: 0.7,
                  backgroundColor: "background.default",
                },
                ":hover": { backgroundColor: "background.default" },
              }}
            >
              <IoLogoTwitter size="1.5rem" />
            </Button>
          </Stack>
        </Grid>
        <Grid item md={7}>
          <AppImage
            showFrame={false}
            src={props.imageSrc}
            alt={data.title}
            borderRadius={10}
            size={{ lg: 10 }}
            maxHeight="100%"
          />
        </Grid>
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
          }}
        >
          <Typography variant="body2">{formattedDate}</Typography>
        </Grid>
        <Grid
          item
          md={7}
          xs={12}
          sx={{ pr: { md: 20 }, width: "50%", whiteSpace: "pre-line" }}
        >
          <PostBody body={data.body} />
        </Grid>
      </Grid>
    </article>
  );
}
