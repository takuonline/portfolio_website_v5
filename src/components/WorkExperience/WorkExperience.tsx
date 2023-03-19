import Grid from "@mui/material/Grid";

import React from "react";
import BodyWrapper from "../Common/BodyWrapper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";

import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomDivider from "../Common/CustomDivider";
import ExperienceItem from "./ExperienceItem";
import workExperienceData, {
  WorkExperienceSchema,
} from "../../common/data/work-experience";
import Paper from "@mui/material/Paper";
import HighlightTypography from "../Common/HighlightTypography";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { merriWeatherFont } from "@/common/themes/fonts/font";
import Divider from "@mui/material/Divider";
import { DarkStar } from "../BackgroundStyleComponets/BgStars";

const InstructionText = (props: { title: string }) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const delayFactor = isMobileView ? 0.3 : 1;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        [theme.breakpoints.down("md")]: {
          mt: 4,
          flexDirection: "row-reverse",
        },
        [theme.breakpoints.down("sm")]: {},
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, width: 0 }}
        transition={{ delay: 1 * delayFactor, duration: 0.2 }}
        whileInView={{
          opacity: 1,
          height: 1,
          width: 250,
          border: `1px solid ${alpha(theme.palette.common.black, 0.2)}`,
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
        ml={{ xs: 0, md: 1 }}
        sx={{
          color: (t) => alpha(theme.palette.common.black, 0.52),
          fontStyle: "italic",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          paddingLeft: { sm: 2, xs: 0.5 },
          width: "25%",

          [theme.breakpoints.down("md")]: {
            width: "50%",
          },
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

const TimeLine = () => {
  const currentYear = new Date().getFullYear().toString();
  const theme = useTheme();

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          mt: 13,
          alignItems: "center",
          [theme.breakpoints.down("md")]: {
            mt: 3,
          },
        }}
        xs={12}
        columnGap={0}
      >
        <Grid item xs={3}>
          <Typography
            sx={{
              typography: "h1",
              color: "black",
              textAlign: "center",
              fontFamily: merriWeatherFont.style.fontFamily,
              fontStyle: "italic",
              opacity: 0.2,

              [theme.breakpoints.down("md")]: {
                typography: "h2",
                fontFamily: merriWeatherFont.style.fontFamily,
              },
            }}
          >
            {"2020"}
          </Typography>
        </Grid>

        <Grid
          item
          xs={5}
          md={6}
          sx={{
            borderLeft: "3px solid black",
            borderRight: "3px solid black",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "2rem",

            [theme.breakpoints.down("md")]: {
              height: "1.2rem",
            },
            [theme.breakpoints.down("sm")]: {},
          }}
        >
          <Box
            sx={{
              typography: "h1",
              borderTop: "3px solid black",
              width: "100%",
              display: "flex",
              justifySelf: "center",
              fontStyle: "italic",
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography
            sx={{
              color: "black",
              typography: "h1",
              textAlign: "center",
              fontFamily: merriWeatherFont.style.fontFamily,
              fontStyle: "italic",
              [theme.breakpoints.down("md")]: {
                typography: "h2",
                fontFamily: merriWeatherFont.style.fontFamily,
              },
            }}
          >
            {currentYear}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

const WorkExperience = () => {
  const theme = useTheme();

  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const delayFactor = isMobileView ? 0.5 : 1;

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const containerAnimation = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3 * delayFactor,
        staggerChildren: 0.2,
      },
    },
  };

  const viewport = { once: true };

  return (
    <>
      <Paper
        sx={{
          position: "relative",
          pt: 10,
          pb: 3,
          color: "background.default",
          borderRadius: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",

            zIndex: 1,
            opacity: 0.3,

            [theme.breakpoints.down("md")]: {
              top: "8%",
              left: "-50rem",
            },
          }}
        >
          <Image
            src="/static/images/Claymetaball2.png"
            alt="Background image Clay meta ball"
            width={3840 * 0.5}
            height={2160 * 0.5}
          />
        </Box>

        <BodyWrapper>
          <Box
            sx={{
              position: "absolute",
              top: "-3%",
              left: "50%",
              [theme.breakpoints.down("md")]: {
                top: "-1.5%",
              },
            }}
          >
            <DarkStar color={"black"} size={200} />
          </Box>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 20,
              flexWrap: "wrap",
            }}
          >
            <SectionHeader
            id="experience"
              sx={{
                color: "black",
                fontFamily: merriWeatherFont.style.fontFamily,
                mb: { lg: 0, xs: 7 },
              }}
            >
              {"My Experience"}
            </SectionHeader>

            <InstructionText title={`3 years of active work`} />
            <TimeLine />
          </Grid>

          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              my: 8,
              textAlign: "right",
              mb: {
                xs: 20,
              },
            }}
            container
          >
            <Grid item lg={3} xs={0}></Grid>

            <Grid
              item
              xs={12}
              variants={containerAnimation}
              component={motion.div}

              // initial="hidden"
              // whileInView="visible"
              // transition={{ duration: 3 }}
              // viewport={{ once: true }}
            >
              {/* <motion.hr
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
                style={{
                  width: "100%",
                  height: "1px",
                  marginTop: 35,
                  backgroundColor: theme.palette.text.primary,
                }}
              /> */}

              {workExperienceData.map(
                (value: WorkExperienceSchema, index: number) => (
                  <motion.div key={index} variants={itemAnimation}>
                    <ExperienceItem key={value.id} item={value} />
                  </motion.div>
                )
              )}
            </Grid>
          </Grid>
        </BodyWrapper>
      </Paper>
    </>
  );
};

export default WorkExperience;
