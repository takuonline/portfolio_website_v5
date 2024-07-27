"use client";

import {
  alpha,
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BlogBodyWrapper from "../Common/BodyWrapper";
import SectionHeader from "../Common/SectionHeader";
import BlackFridayPlotlyDashboard from "./WebDashboard/WebDashboard";
import GoogleLensClone from "./GoogleLensClone/GoogleLensClone";
import MobileEcommerceApp from "./MobileEcommerceApp/MobileEcommerceApp";
import ReflectlyClone from "./ReflectlyClone/ReflectlyClone";
import SavvyShopper from "./SavvyShopper/SavvyShopper";
import HighlightTypography from "../Common/HighlightTypography";
import { motion } from "framer-motion";
import DepthEllipse from "../BackgroundStyleComponents/DepthEllipse";
import BgRings from "../BackgroundStyleComponents/BgRings";
import { BgLightStar2 } from "../BackgroundStyleComponents/BgStars";
import DataStudio from "./DataStudio/DataStudio";

const InstructionText = (props: {
  title: string;
  color: string;
  opacity: number;
}) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const delayFactor = isMobileView ? 0.3 : 1;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        opacity: props.opacity,
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, width: 0 }}
        transition={{ delay: 1 * delayFactor, duration: 0.2 }}
        whileInView={{
          opacity: 1,

          width: 180,
          border: `1px solid ${alpha(props.color, 0.2)}`,

          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
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
        sx={{
          color: (t) => alpha(props.color, 0.5),
          fontStyle: "italic",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          paddingLeft: { sm: 2, xs: 0.5 },
          ml: 1,
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

const Title = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        // flexDirection: "column",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-between",
          rowGap: 7,
          alignItems: "stretch",
        },
      }}
    >
      <Box />
      <SectionHeader
        id="my-work"
        sx={{
          display: "inline-block",
        }}
      >
        {`My `}
        <HighlightTypography>{"work"}</HighlightTypography>
      </SectionHeader>

      <InstructionText
        title="12+ projects"
        color={theme.palette.common.white}
        opacity={0.5}
      />
    </Box>
  );
};

const BgStyling = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: "-14rem",
          top: "-20rem",
          [theme.breakpoints.down("md")]: {
            top: "-20rem",
            left: "-10rem",
          },
        }}
      >
        <DepthEllipse size={{ lg: "656px", xs: "556px" }} opacity={0.09} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: "-14rem",
          bottom: "-2rem",
          zIndex: -2,
        }}
      >
        <DepthEllipse size={"756px"} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: {
            xs: "155rem",
            lg: "15rem",
          },
          left: "-8rem",
        }}
      >
        <BgLightStar2 size={240} color={undefined} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: {
            xs: "15rem",
            lg: "155rem",
          },
          right: "-20rem",
        }}
      >
        <BgRings size={{ md: 470, xs: 300 }} opacity={0.8} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: {
            xs: "33rem",
            lg: "172rem",
          },
          right: "-10rem",
          transform: "rotate(80deg)",

          [theme.breakpoints.down("md")]: {
            top: "9rem",
            right: "-10rem",
          },
        }}
      >
        <BgRings size={250} opacity={0.8} />
      </Box>
    </>
  );
};

const PortfolioProjects = () => {
  const theme = useTheme();

  return (
    <>
      <BlogBodyWrapper>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 23,
            mb: 7,
            height: "100%",
            [theme.breakpoints.down("md")]: {
              mt: 12,
            },
          }}
        >
          <Title />
        </Box>

        <Grid container>
          <Typography
            variant={"body2"}
            sx={{
              fontWeight: 400,
              lineHeight: "28px",
              opacity: 0.8,
              mb: 5,
              width: "70%",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            {`Welcome to my comprehensive portfolio website! As a versatile data scientist and skilled software developer,
     I possess a unique blend of expertise in utilizing data to drive business decisions and creating
      innovative technology solutions. With extensive experience in both front-end and back-end development,
       I have designed and developed complex software solutions that have streamlined operations and
        enhanced user experiences. Explore my portfolio to learn more about my data-driven approach
        and the software solutions I’ve created for organizations across diverse industries.`}
          </Typography>
        </Grid>
      </BlogBodyWrapper>

      <Box
        sx={{
          position: "relative",
          zIndex: 6,
        }}
      >
        <BgStyling />

        <DataStudio />
        <SavvyShopper />

        <GoogleLensClone />
        <MobileEcommerceApp />
        <BlackFridayPlotlyDashboard />
        <ReflectlyClone />

        {/* <BodyWrapper>
  <TextDivider
    text={
      "l am passionate about solving hard problems to drive positive change in the world."
    }
  >
    {`Building innovative solutions can be a challenging and
rewarding process. It requires creativity, critical thinking,
and a willingness to take risks and learn from failures.`}
    <br />
    {`
By following a `}

    <HighlightTypography>{`structured process,`}</HighlightTypography>

    {` such as the design
thinking process, and gathering feedback from potential
users or customers, `}
    {`l am able can increase the chances of
developing a successful and impactful solution`}
  </TextDivider>
</BodyWrapper> */}
      </Box>

      <Box my={30} />
    </>
  );
};

export default PortfolioProjects;
