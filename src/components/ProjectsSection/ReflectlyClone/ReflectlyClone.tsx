import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import AppVideo from "../../Common/AppVideo";
import BodyWrapper from "../../Common/BodyWrapper";
import HighlightTypography from "../../Common/HighlightTypography";

import ProjectTextBox from "../ProjectTextBox";
import ProjectTitleHeader from "../ProjectTitleHeader";

const ReflectlyClone = (props: { index: number }) => {
  const TextBoxSize = {
    xs: 12,
    sm: 10,
    md: 8,
    lg: 12,
  };
  const theme = useTheme();
  const viewport = { once: true };
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.5 : 1;
  return (
    <>
      <BodyWrapper>
        <ProjectTitleHeader title={"Reflectly Clone  "} index={props.index} />
        <Box my={{ lg: 15 }} />
        <Grid
          container
          gap={5}
          sx={{
            mt: 7,
          }}
        >
          <Grid
            lg={7}
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
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 * mobileAnimationFactor,
              duration: 0.3 * mobileAnimationFactor,
            }}
            viewport={viewport}
          >
            <AppVideo
              src={"https://youtu.be/0EfVCwQ4dFQ"}
              alt={"Mobile Ecommerce App "}
              size={{ xs: 120, sm: 6, lg: 6 }}
            />
          </Grid>

          <Grid
            lg={4}
            xs={12}
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5 * mobileAnimationFactor,
              duration: 0.4 * mobileAnimationFactor,
            }}
            viewport={viewport}
          >
            <Stack direction={"column"}>
              <ProjectTextBox
                title={"Project Description"}
                size={TextBoxSize}
                sx={{
                  mt: { sm: 0, xs: 3 },
                }}
              >
                {`- One of the applications l build whilst developing my skills as a mobile developer

- Reflectly is one of the most popular journaling apps in the world.

- This app helped me boost my confidence and reach out to some very cool developers.

- This is one of the toughest mobile apps out their because of its complex ui and l felt that if l could
develop something like this l would be able to do just about everything else.`}
              </ProjectTextBox>
              <Box my={{ lg: 5, md: 4, xs: 0 }} />
            </Stack>
          </Grid>
        </Grid>

        <Box my={30} />
      </BodyWrapper>
    </>
  );
};

export default ReflectlyClone;
