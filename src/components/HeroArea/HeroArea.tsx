import Image from "next/image";
import { alpha, Box, Grid, Typography, useMediaQuery } from "@mui/material";
import HighlightTypography from "../Common/HighlightTypography";
import { useTheme } from "@mui/material/styles";
import React from "react";

import BodyWrapper from "../Common/BodyWrapper";
import { motion } from "framer-motion";
import DepthEllipse from "../BackgroundStyleComponents/DepthEllipse";
import StarButton from "../Buttons/StarBtn";
import BgRings from "../BackgroundStyleComponents/BgRings";
import HeroAreaQuote from "../BackgroundStyleComponents/HeroAreaQuote";
import CustomDivider from "../Common/CustomDivider";
import { useRouter } from "next/navigation";

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
          top: "18rem",
          left: "0%",
          [theme.breakpoints.down("lg")]: {
            top: "15rem",
          },
          [theme.breakpoints.down("md")]: {
            top: "40rem",

          },
          [theme.breakpoints.down("sm")]: {
            top: "35rem",

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
        variant={"body2"}
        sx={{
          position: "absolute",
          top: "31.5rem",
          right: "15rem",
          width: "40%",
          color: "primary.main",
          fontWeight: 100,
          [theme.breakpoints.down("lg")]: {
            left: "33rem",
            width: "45%",
          },
          [theme.breakpoints.down("md")]: {
            left: "0rem",
            width: "100%",
            top: "60rem",
            right: "auto",
          },
          [theme.breakpoints.down("sm")]: {
            left: "0rem",
            width: "100%",
            top: "51rem",
            right: "auto",
          },
        }}
      >
        {`A Data scientist and Software engineer bridging the Gap Between Data and Technology.
           Using AI and Code to create innovative solutions that solve real world problems`}
      </Typography>
    </>
  );
};
const BgDecorations = () => {
  const theme = useTheme();
  const router = useRouter();
  const handleClick = () => {
    router.push("/#my-services");
  };

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          bottom: "6rem",
          left: "20rem",
          [theme.breakpoints.down("lg")]: {
            bottom: "7rem",
          },
          [theme.breakpoints.down("md")]: {
            top: "35rem",
            left: "20rem",
          },

          [theme.breakpoints.down("sm")]: {
            top: "31rem",
            left: "15rem",
          },
        }}
      >
        <StarButton
          onClick={handleClick}
          backgroundColor={theme.palette.primary.main}
          bgStarSize={150}
          sx={{}}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "-7rem",
          right: "-5rem",
          [theme.breakpoints.down("md")]: {
            right: "-10rem",
          },
          [theme.breakpoints.down("sm")]: {
            right: "-8rem",
            top: "0rem",
          },

        }}
      >
        <DepthEllipse size={{lg:"756px",xs:"400px"}}  opacity={0.1} blur={120}/>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "0rem",
          right: "-7%",
          zIndex: -1,
          [theme.breakpoints.down("md")]: {
            right: "-20%",
            top: "10%",
          },
        }}
      >
        <BgRings size={{ md: 380, xs: 180 }} opacity={1} />
      </Box>
    </>
  );
};
const HeroFrontText = () => {
  const theme = useTheme();

  return (
    <Typography
      // variant="h1"
      sx={{
        position: "absolute",
        top: "-1.2rem",
        left: "0rem",
        fontSize: "7.2rem",
        width: "100%",
        fontWeight: 400,

        fontStyle: "normal",
        lineHeight: "90%",
        letterSpacing: "-0.05em",

        [theme.breakpoints.down("lg")]: {
          // top: "12rem",
          fontSize: "5.5rem",
        },
        [theme.breakpoints.down("md")]: {
          top: "10rem",
          fontSize: "6rem",
          width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
          // bottom: "10%",

          fontSize: "5rem",
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

  // const containerAnimation = {
  //   initial:  {  opacity: 0, width: 0  },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delayChildren: 0.3 * delayFactor,
  //       staggerChildren: 0.2,
  //     },
  //   },
  //   whileInView:{
  //     opacity: 1,
  //     width: 250,
  //     border: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
  //   }
  // };
  return (
    <Box
      mt={{ lg: -8 }}
      sx={{
        display: "flex",
        position: "absolute",
        right: "1rem",
        bottom: "6.5rem",

        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          display: "None",
        },
      }}
    >
      <Box
        component={motion.div}
        // variants={containerAnimation}
        initial={{ opacity: 0, width: 0 }}
        transition={{ delay: 1 * delayFactor, duration: 0.2 }}
        whileInView={{
          opacity: 1,
          width: 250,
          border: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,
        }}
        viewport={{ once: true }}
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
            height: "50rem",
            display: "flex",
            position: "relative",
            mt: 22,
            zIndex: 2,

            [theme.breakpoints.down("md")]: {
              mt: 0,
            },
          }}
        >
          <HeroFrontText />

          <HeroBgImage />

          <BgDecorations />

          <HeroInstructionText />

        </Grid>
      </BodyWrapper>

      <Box sx={{ position: "relative" }}>
        <HeroAreaQuote iconSize={120} />
      </Box>

      <Box mb={{ lg: 15, xs: 25 }} />
      <CustomDivider
        sx={{
          my: 15,
        }}
      />
    </>
  );
};
export default HeroArea;
