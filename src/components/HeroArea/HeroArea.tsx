import Image from "next/image";
import { alpha, Box, Grid, Typography, useMediaQuery } from "@mui/material";
import HighlightTypography from "../Common/HighlightTypography";
import { useTheme } from "@mui/material/styles";
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

          [theme.breakpoints.down("md")]: {
            top: "80%",
            mt: 20,
          },
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            width: "60%",
            [theme.breakpoints.down("lg")]: {
              width: "100%",
              position: "absolute",
            },
          }}
        >
          <Image
            style={{
              filter: "grayscale(100%)",
              width: isMobileView ? "160%" : "120%",
              height: "100%",
              borderRadius: "1000rem",
            }}
            src="/static/images/Taku2.3.png"
            alt="hero_image"
            // fill
            width={892}
            height={523}
          />
        </Box>
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

          [theme.breakpoints.down("md")]: {
            left: "0%",
            width: "100%",
            top: "168%",
            right: "auto",
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
const BgDecorations = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: "-2rem",
          left: "27%",

          [theme.breakpoints.down("md")]: {
            top: "30rem",
            left: "auto",
            right: "10%",
          },
        }}
      >
        <StarButton
          onClick={() => {}}
          backgroundColor={theme.palette.primary.main}
          bgStarSize={150}
          sx={{}}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "22%",
          right: "0%",
          [theme.breakpoints.down("md")]: {
            right: "-20%",
          },
        }}
      >
        <DepthEllipse size={"556px"} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "25%",
          right: "-3%",

          [theme.breakpoints.down("md")]: {
            right: "-20%",
            top: "10%",
            zIndex: -1,
          },
        }}
      >
        <BgRings size={{ md: 350, xs: 280 }} opacity={1} />
      </Box>
    </>
  );
};
const HeroFrontText = () => {
  const theme = useTheme();

  return (
    <Typography
      sx={{
        position: "absolute",
        bottom: "72%",
        left: "0%",
        fontSize: "8.5rem",

        fontWeight: 400,
        // fontSize: "128px",
        fontStyle: "normal",
        lineHeight: "90%",
        // fontFamily: poppinsFont.style.fontFamily,
        letterSpacing: "-0.05em",

        [theme.breakpoints.down("md")]: {
          bottom: "10%",
          fontSize: "6rem",
          width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
          // bottom: "10%",

          fontSize: "4.5rem",
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
        component={"span"}
        sx={{
          ml: 25,
          [theme.breakpoints.down("md")]: {
            ml: 0,
          },
        }}
      >
        {"business solutions "}
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
        [theme.breakpoints.down("md")]: {
          display: "None",
        },
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
      <BodyWrapper
        sx={
          {
            // overflowX: "hidden",
          }
        }
      >
        <Grid
          container
          xs={12}
          sx={{
            height: "60vh",
            display: "flex",
            position: "relative",
            mt: 37,
            zIndex: 2,

            [theme.breakpoints.down("md")]: {
              mt: 0,
            },
          }}
        >
          <HeroFrontText />

          <HeroBgImage />

          <BgDecorations />
        </Grid>

        <HeroInstructionText />
      </BodyWrapper>

      <Box sx={{ position: "relative" }}>
        <BgQuotes iconSize={120} />
      </Box>

      <Box mb={{ lg: 60, xs: 75 }} />
      <CustomDivider
        sx={{
          my: 20,
        }}
      />
    </>
  );
};
export default HeroArea;
