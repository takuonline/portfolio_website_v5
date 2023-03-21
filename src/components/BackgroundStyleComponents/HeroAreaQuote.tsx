import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import BodyWrapper from "../Common/BodyWrapper";
import HighlightTypography from "../Common/HighlightTypography";
import DepthEllipse from "./DepthEllipse";

const HeroAreaQuote = (props: { iconSize: number }) => {
  const theme = useTheme();

  const tabChar = (
    <span
      style={{
        display: "inline-block",
        width: "2ch",
      }}
    >
      &#9;
    </span>
  );

   // TODO: This is a hack to fix an issue with the use MediaQuery hook
   const initValue = useMediaQuery(theme.breakpoints.up("md"), {
    // noSsr: true,
  });
  const [isMdUpBreakpoint, setIsMdUpBreakpoint] = React.useState(true);

  React.useEffect(() => {
    setIsMdUpBreakpoint(initValue);
  }, [useMediaQuery(theme.breakpoints.up("md"))]);


  const imageFactor = 0.45;
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          mt: 18,

          [theme.breakpoints.down("lg")]: {
            mt:-10,
          },
          [theme.breakpoints.down("md")]: {
            mt: 35,
          },
          [theme.breakpoints.down("sm")]: {
            mt: 25,
          },
        }}
      >
        <Grid
          container
          columnGap={{ lg: 20 }}
          sx={{
            display: "flex",

            [theme.breakpoints.down("lg")]: {
              flexDirection: "column-reverse",
            },
          }}
        >
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              height: "40rem",
              position: "relative",
              ml: 6,
              [theme.breakpoints.down("md")]: {
                ml: 2,
              },
            }}
          >
            <Image
              alt={"Star button svg"}
              priority
              src="/static/svg/quotes.svg"
              height={props.iconSize}
              width={props.iconSize}
              color={"red"}
            />

            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                top: "3.5rem",
                ml: 4,
                // textIndent: "1em",


                [theme.breakpoints.down("lg")]: {
                  width: "100%",
                  ml: 0,

                },
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                  ml: 0,
                },
              }}
            >
              {tabChar}
              {`   You can’t connect the dots looking forward, you can only connect them looking backwards. `}
              <HighlightTypography>{`So you have to trust `}</HighlightTypography>
              {` that the dots will somehow connect in your future.`}{" "}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                position: "absolute",
                top: "18rem",
                right: "0rem",
                opacity: 0.5,

                [theme.breakpoints.down("lg")]: {
                  top: "13rem",
                  right: "1rem",
                  left: "auto",
                },

                [theme.breakpoints.down("md")]: {
                  top: "13rem",
                  right: "1rem",
                  left: "auto",
                },

                [theme.breakpoints.down("sm")]: {
                  top: "23rem",
                  right: "1rem",
                  left: "auto",
                },
              }}
            >
              {"- Steve Jobs"}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                // position: "absolute",
                // top: "29rem",
                // left: "40%",
                opacity: 0.5,
                width: "70%",
                height: "100%",
                // whiteSpace: "break-spaces",
                ml: 18,
                mt: 27,

                [theme.breakpoints.down("lg")]: {
                  // top: "360%",
                      width: "100%",
                  whiteSpace: "normal",
                  ml: 0,
                  mt: 17,
                },

                [theme.breakpoints.down("md")]: {
                  // top: "360%",
                      width: "100%",
                  whiteSpace: "normal",
                  ml: 0,
                  mt: 18,
                },
                [theme.breakpoints.down("sm")]: {
                  // top: "360%",
                      width: "100%",
                  whiteSpace: "normal",
                  ml: 0,
                  mt: 38,
                },
              }}
            >
              {`It can be hard to trust in the process when you can’t
see the bigger picture. But you never know what
might be around the corner, so you have to keep
moving forward. And one day, you may recognize that
some of the hardest things you had to go through were
also the best things that ever happened to you.`}
            </Typography>
          </Grid>

          <Grid item xs={12} lg={5}    >
            <Box
              sx={{
                height: "40rem",
                width: "40rem",
                // backgroundColor: "red",
                // opacity: 0.03,
                position: "relative",

                [theme.breakpoints.down("lg")]: {

                  // position: "absolute",
                  top: "8rem",
                  left: "4rem",
                },
                [theme.breakpoints.down("sm")]: {
                  height: "27rem",
                  width: "27rem",
                  // position: "absolute",
                  top: "8rem",
                  left: "4rem",
                },
              }}
            >
              <Image
                src="/static/images/BlackWavy.png"
                alt="Black wavy background decoration"
                // width={3840 *imageFactor}
                // height={2160 *imageFactor}

                fill
                style={{
                  position: "absolute",
                  top: "-8rem",
                  left: "-4rem",
                  zIndex: 5,
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            position: "absolute",
            top: "12rem",
            right: "15rem",
            [theme.breakpoints.down("md")]: {
              top: "-220%",
            },
          }}
        >
          <DepthEllipse size={"356px"} />
        </Box>
      </Box>
    </>
  );
};

export default HeroAreaQuote;
