import Image from "next/image";
import { alpha, Box, Grid, Typography, useMediaQuery } from "@mui/material";
import HighlightTypography from "../Common/HighlightTypography";
import { useTheme } from "@mui/material/styles";
import TextDivider, { TextDividerDescription } from "../Common/TextDivider";
import React from "react";

import BodyWrapper from "../Common/BodyWrapper";
import { motion } from "framer-motion";
import DepthEllipse from "../BackgroundStyleComponets/DepthEllipse";
import StarButton from "../Buttons/StarBtn";
import BgRings from "../BackgroundStyleComponets/BgRings";
import BgQuotes from "../BackgroundStyleComponets/BgQuotes";
import CustomDivider from "../Common/CustomDivider";

// Only loads the YouTube player
const HeroBgImage = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        lg={8}
        xs={12}
        sx={{
          position: "absolute",
          top: "38%",
          left: "0%",
          // transform: "translate(-50%, -50%)",

          // [theme.breakpoints.down("lg")]: {
          //   top: "80%",
          //   left: "50%",
          // },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            width: "60%",
          }}
        >
          <Image
            style={{
              filter: "grayscale(100%)",
              width: "120%",
              height: "100%",

              borderRadius: "1000rem",
            }}
            src="/static/images/Taku2.3.png"
            alt="hero_image"
            // fill
            width={892}
            height={523}
          />
        </motion.div>
      </Grid>

      <Typography
        component={"span"}
        sx={{
          position: "absolute",
          top: "85%",
          right: "16%",
          width: "45%",
          color: "primary.main",
          fontWeight: 100,
          [theme.breakpoints.down("lg")]: {
            top: "95%",
            right: "0%",
            width: "50%",
          },
          [theme.breakpoints.down("md")]: {
            right: "0%",
            width: "50%",
            top: "90%",
          },
          [theme.breakpoints.down("sm")]: {
            mt: 3,
            width: "100%",
            top: "120%",
          },
        }}
        variant={"body2"}
      >
        {`A Data scientist and Software engineer bridging the Gap Between Data and Technology.
           Using AI and Code to create innovative solutions that solve real world problems`}
      </Typography>
    </>
  );
};

const HeroFrontText = () => {
  const theme = useTheme();

  return (
    <Typography
      variant="h1"
      sx={{
        position: "absolute",
        bottom: "75%",
        left: "0%",

        [theme.breakpoints.down("md")]: {
          // fontSize: "4rem",
        },
        [theme.breakpoints.down("sm")]: {
          // fontSize: "2.5rem",
          fontWeight: 700,
          top: "0%",
          width: "80%",
        },
      }}
    >
      {"Building  "}
      <HighlightTypography
        backgroundSize="auto 25%"
        backgroundPosition="10% 100%"
      >
        {` innovative`}
      </HighlightTypography>

      <Box
        sx={{
          ml: 25,
        }}
      >
        {" business solutions "}
      </Box>
    </Typography>
  );
};

const HeroInstructionText = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const delayFactor = isMobileView ? 0.3 : 1;
  return (
    <Box
      mt={{ lg: 10 }}
      sx={{
        display: "flex",
        position: "absolute",
        right: "5%",

        alignItems: "center",
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, width: 0 }}
        transition={{ delay: 1 * delayFactor, duration: 0.2 }}
        whileInView={{
          opacity: 1,
          width: 250,
          border: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
        }}
        viewport={{ once: true }}
        sx={{}}
      />

      <Typography
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 * delayFactor, duration: 0.3 }}
        viewport={{ once: true }}
        variant="body2"
        ml={1}
        sx={{
          color: (t) => alpha(t.palette.text.primary, 0.5),
          fontStyle: "italic",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          paddingLeft: { sm: 2, xs: 0.5 },
        }}
      >
        {"(scroll)"}
      </Typography>
    </Box>
  );
};

const HeroArea = () => {
  const theme = useTheme();
  return (
    <>
      <BodyWrapper>
        <Grid
          container
          xs={12}
          sx={{
            height: "50vh",
            display: "flex",
            position: "relative",
            mt: 27,

            [theme.breakpoints.down("lg")]: {
              height: "70vh",
              mb: 20,
              mt: 0,
            },
            [theme.breakpoints.down("md")]: {
              height: "50vh",
              mt: 10,
            },
            [theme.breakpoints.down("sm")]: {
              height: "42vh",
              mb: 38,
              mt: 8,
            },
          }}
        >
          <HeroBgImage />
          <HeroFrontText />
        </Grid>
        <HeroInstructionText />
        <Box mb={15} />

        <Box
          sx={{
            position: "absolute",
            bottom: "17%",
            left: "27%",
          }}
        >
          <StarButton
            onClick={() => {}}
            backgroundColor={theme.palette.primary.main}
            bgStarSize={150}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "32%",
            right: "6%",
          }}
        >
          <DepthEllipse size={"356px"} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "25%",
            right: "-3%",
          }}
        >
          <BgRings size={350} />
        </Box>

        <Box>
          <Box sx={{ position: "relative" }}>
            <BgQuotes iconSize={120} />
          </Box>
        </Box>

        {/* <TextDivider
          text={`“You can’t connect the dots looking forward, you can only connect them looking backwards.
             So you have to trust that the dots will somehow connect in your future.”`}
          author={"Steve Jobs"}
        >
          {`It can be hard to trust in the process when you can’t see the bigger picture. But you never know what might be around the corner, so you have to keep moving forward.
           And one day, you may recognize that some of the hardest things you had to go through were also the best things that ever happened to you.`}
          <br />
        </TextDivider>{" "} */}

        <Box mb={60} />


      </BodyWrapper>
      <CustomDivider
          sx={{
            my: 20,
          }}
        />
    </>
  );
};
export default HeroArea;
