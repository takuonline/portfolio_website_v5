import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import AppVideo from "../../Common/AppVideo";
import BodyWrapper from "../../Common/BodyWrapper";

import ProjectTextBox from "../ProjectTextBox";
import ProjectTitleHeader from "../ProjectTitleHeader";

const MobileEcommerceApp = (props: { index: number }) => {
  const TextBoxSize = {
    xs: 12,
    sm: 10,
    md: 8,
    lg: 12,
  };
  const theme = useTheme();
  const viewport = { once: true };

  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.6 : 1;
  return (
    <>
      <BodyWrapper>
        <ProjectTitleHeader
          title={"Mobile Ecommerce App"}
          index={props.index}
        />

        <Grid
          container
          gap={{ xs: 10 }}
          sx={{
            mt: { xs: 7, lg: 12 },

            [theme.breakpoints.down("lg")]: {
              display: "flex",
              flexDirection: "column-reverse",
            },
          }}
        >
          <Grid
            lg={4}
            xs={12}
            sx={{
              [theme.breakpoints.down("lg")]: {
                mt: 40,
              },
              [theme.breakpoints.down("md")]: {
                mt: 10,
              },
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7*mobileAnimationFactor, duration: 0.3*mobileAnimationFactor}}
            viewport={viewport}
          >
            <ProjectTextBox title={"Project Description"} size={TextBoxSize}>
              {
`- This is the first application that l have ever build for mobile.

- l designed it from scratch taking inspiration from designs l found on dribble and then developed it using the Flutter framework.

- l have found that l learn better by doing and its through applications like this that l am the developer and scientist that l am today.

- This is my preferred way of learning
`}
            </ProjectTextBox>
            <Box my={{ xs: 6, sm: 10 }} />

            <ProjectTextBox title={"Features"} size={TextBoxSize}>
              {`- The application features a lot of different animations

- It uses the provider library to manage state.

- Whilst the application was mostly an MVP l has an authentication integration from Firebase as well as a payment gateway through Square.
              `}
            </ProjectTextBox>
          </Grid>

          <Grid
            lg={7}
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "start",

              [theme.breakpoints.up("lg")]: {
                display: "flex",
                justifyContent: "center",
              },
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 *mobileAnimationFactor}}
            viewport={viewport}
          >
            <AppVideo
              src={"https://youtu.be/53kCtub7uek"}
              alt={"Mobile Ecommerce App "}
              size={{ xs: 12, lg: 6 }}
              borderRadius={3}
            />
          </Grid>
        </Grid>

        <Box my={{ xs: 20, lg: 30 }} />
      </BodyWrapper>
    </>
  );
};

export default MobileEcommerceApp;
