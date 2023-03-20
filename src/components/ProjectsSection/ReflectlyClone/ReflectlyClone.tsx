import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { alpha, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import AppVideo from "../../Common/AppVideo";
import BodyWrapper from "../../Common/BodyWrapper";
import HighlightTypography from "../../Common/HighlightTypography";
import ProjectComponent from "../ProjectComponent";
import ProjectSectionWrapper from "../ProjectSectionWrapper";

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
        <ProjectComponent
          title={"Reflectly Clone"}
          skills={["Mobile development"]}
          bgImage={
            <Box
              sx={{
                // backgroundColor: " #0093E955",
                backgroundImage:
                  "linear-gradient(to bottom right,  #0093E9ff, #0093E977) ",
                boxShadow: "inset 0px 0px 0 2000px rgba(0,0,0,0.7)",
                width: "100%",
                height: "100%",
              }}
            >
              <AppVideo
                src={"https://youtu.be/0EfVCwQ4dFQ"}
                alt={"Mobile Ecommerce App "}
                size={{
                  lg: 2,
                  xs: 7,
                }}
                borderRadius={6}
                sx={{
                  position: "absolute",
                  right: "22rem",
                  top: "6rem",

                  [theme.breakpoints.down("md")]: {
                    right: "20%",
                    top: "9rem",
                  },
                  // display:"flex"
                }}
                showFrame={false}
              />
            </Box>
          }
        >
          <ProjectSectionWrapper
            firstComponent={
              <Box
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
                  size={{
                    lg: 9,
                  }}
                  frameHeight={"42.9rem"}
                />
              </Box>
            }
            firstComponentScale={{
              // xs: 0,
              // sm: 0,
              // md: 0,
              lg: 4,
            }}
            secondComponent={
              <Typography
                variant="body2"
                component="div"
                sx={{
                  whiteSpace: "break-spaces",
                  wordBreak: "normal",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {`- One of the applications l build whilst developing my skills as a mobile developer

- Reflectly is one of the most popular journaling apps in the world.

- This app helped me boost my confidence and reach out to some very cool developers.

- This is one of the toughest mobile apps out their because of its complex ui and l felt that if l could
develop something like this l would be able to do just about everything else.`}
              </Typography>
            }
            secondComponentScale={{
              // xs: 0,
              // sm: 0,
              // md: 0,
              lg: 6,
            }}
            showDivider={false}
          />
        </ProjectComponent>
      </BodyWrapper>
    </>
  );
};

export default ReflectlyClone;
