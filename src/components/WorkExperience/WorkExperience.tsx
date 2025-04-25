import Grid from "@mui/material/Grid";

import React, { useEffect, useState } from "react";
import BodyWrapper from "../Common/BodyWrapper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";

import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import workExperienceData from "../../common/data/work-experience";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { merriWeatherFont } from "@/common/themes/fonts/font";
import { DarkStar } from "../BackgroundStyleComponents/BgStars";

// Import MUI components for your project
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

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

const CarouselIndicators = ({
  activeIndex,
  selectSlide,
}: {
  activeIndex: number;
  selectSlide: (index: number) => void;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,

        width: "100%",
      }}
    >
      {workExperienceData.map((_, index) => (
        <Box
          key={index}
          component={motion.div}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => selectSlide(index)}
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor:
              index === activeIndex
                ? alpha(theme.palette.common.black, 0.7)
                : alpha(theme.palette.common.black, 0.2),
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
          }}
        />
      ))}
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

const CarouselBtns = ({
  handlePrev,
  handleNext,
}: {
  handlePrev: () => void;
  handleNext: () => void;
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        width: "100%",
        mt: { xs: 4, md: 6 },
        position: "relative",
        zIndex: 1,
      }}
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <IconButton
          onClick={handlePrev}
          aria-label="Previous experience"
          sx={{
            border: `1px solid ${alpha(theme.palette.common.black, 0.2)}`,
            borderRadius: "50%",
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
            color: alpha(theme.palette.common.black, 0.7),
            backdropFilter: "blur(4px)",
            backgroundColor: alpha(theme.palette.background.paper, 0.6),
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
              borderColor: alpha(theme.palette.common.black, 0.3),
              color: theme.palette.common.black,
            },
          }}
        >
          <ChevronLeft />
        </IconButton>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <IconButton
          onClick={handleNext}
          aria-label="Next experience"
          sx={{
            border: `1px solid ${alpha(theme.palette.common.black, 0.2)}`,
            borderRadius: "50%",
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
            color: alpha(theme.palette.common.black, 0.7),
            backdropFilter: "blur(4px)",
            backgroundColor: alpha(theme.palette.background.paper, 0.6),
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
              borderColor: alpha(theme.palette.common.black, 0.3),
              color: theme.palette.common.black,
            },
          }}
        >
          <ChevronRight />
        </IconButton>
      </motion.div>
    </Box>
  );
};

const WorkExperience = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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

  // Animation variants for the carousel
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  // Handle responsive layout
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prevIndex: number) =>
      prevIndex === 0 ? workExperienceData.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prevIndex: number) =>
      prevIndex === workExperienceData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const selectSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const currentYear = new Date().getFullYear().toString();

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
              top: "-6%",
              left: "50%",
              [theme.breakpoints.down("md")]: {
                top: "-1.5%",
              },
            }}
          >
            <DarkStar size={200} />
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

            <InstructionText
              title={`${+currentYear - 2020} years of active work`}
            />
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
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                minHeight: { xs: 400, sm: 450, md: 500 }, // Adjust these values to fit your content
                width: "100%",
              }}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <motion.div variants={itemAnimation}>
                    <ExperienceItem item={workExperienceData[activeIndex]} />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </Box>

            <CarouselIndicators
              activeIndex={activeIndex}
              selectSlide={selectSlide}
            />

            <CarouselBtns handlePrev={handlePrev} handleNext={handleNext} />
          </Grid>
        </BodyWrapper>
      </Paper>
    </>
  );
};

export default WorkExperience;
