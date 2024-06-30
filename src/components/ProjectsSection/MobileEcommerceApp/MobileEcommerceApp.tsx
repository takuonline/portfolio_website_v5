import { alpha, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import AppVideo from "../../Common/AppVideo";
import BodyWrapper from "../../Common/BodyWrapper";
import ProjectComponent from "../ProjectComponent";

import ProjectSectionWrapper from "../ProjectSectionWrapper";

import React from "react";
import {
  Box,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemText,
  Paper,
  Grid,
} from "@mui/material";

import ProjectTextBox from "../ProjectTextBox";
import theme from "@/common/themes/theme";
import ProjectDescriptionSubtitle from "@/components/Common/ProjectDescriptionSubtitle";

const MobileAppProjectDescription = () => {


  const techStack = ["Flutter", "Provider", "Firebase", "Square"];
  const features = [
    "Various animations",
    "State management with Provider",
    "Firebase authentication",
    "Square payment gateway integration",
  ];

  const keyFeatures = [
    {
      primary: "Various animations",
      secondary: "The app features a variety of animated elements, enhancing user experience and interface interactivity."
    },
    {
      primary: "State management with Provider",
      secondary: "Utilizes the Provider library for efficient and scalable state management across the application."
    },
    {
      primary: "Firebase authentication",
      secondary: "Implements secure user authentication through Firebase, ensuring protected access to app features."
    },
    {
      primary: "Square payment gateway integration",
      secondary: "Incorporates Square's payment gateway, allowing for smooth and secure transaction processing within the app."
    }
  ];


  return (
    <Paper
      sx={{
        margin: "auto",
        p: {
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
        },
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        itemsAlign: "start",
      }}
    >

<Paper elevation={0}  sx={{ p: 3, backgroundColor: 'transparent'}}>
        <ProjectDescriptionSubtitle     >Key Features</ProjectDescriptionSubtitle>
        <List>

          {
            keyFeatures.map((feature, index) => (
              <ListItem key={index} disableGutters>
                <ListItemText primary={feature.primary} secondary={feature.secondary} sx={{ color: "white" }} />
              </ListItem>
            ))
          }

        </List>
      </Paper>


      <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle

        >
          {"Learning Experience"}
        </ProjectDescriptionSubtitle>
        <Typography variant="body1" sx={{ color: "white" }}>
          {
            "While the application was mostly an MVP, it provided invaluable learning experiences:"
          }
        </Typography>
        <List disablePadding>
          <ListItem disableGutters>
            <Typography variant="body1" sx={{ color: "white" }}>
              {"Hands-on experience with mobile app development"}
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body1" sx={{ color: "white" }}>
              {"Practical application of UI/UX design principles"}
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body1" sx={{ color: "white" }}>
              {"Integration of third-party services (Firebase, Square)"}
            </Typography>
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle >
          {"Technologies Used"}
        </ProjectDescriptionSubtitle>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            />
          ))}
        </Box>
      </Paper>
    </Paper>
  );
};
const MobileEcommerceApp = (props: {}) => {
  const TextBoxSize = {
    xs: 12,
    sm: 10,
    md: 8,
    lg: 12,
  };

  const AppImageSize = {
    xs: 10,
    md: 6,
    lg: 8,
  };

  const AppVideoSize = {
    xs: 12,
    lg: 9,
  };
  const theme = useTheme();
  const viewport = { once: true };

  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.6 : 1;
  return (
    <>
      <BodyWrapper>
        <ProjectComponent
          title={"Mobile Ecommerce App"}
          skills={["Mobile development"]}
          bgImage={
            <Box
              sx={{
                backgroundColor: "#FFCB5F99",
                width: "100%",
                height: "100%",
                // borderRadius: 24,
              }}
            >
              <AppVideo
                src={"https://youtu.be/53kCtub7uek"}
                alt={"Mobile Ecommerce video showcase "}
                borderRadius={3}
                size={{
                  xs: 7,
                  sm: 4,
                  md: 4,
                  lg: 2,
                }}
                sx={{
                  position: "absolute",
                  right: "22rem",
                  top: "23rem",
                  transform: "translate(0,-50%)",
                  [theme.breakpoints.down("md")]: {
                    right: "20%",
                    top: "21rem",
                  },
                }}
                showFrame={false}
              />
            </Box>
          }
        >
          <ProjectSectionWrapper
            firstComponent={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * mobileAnimationFactor,
                  duration: 0.5 * mobileAnimationFactor,
                }}
                viewport={{ once: true }}
              >
                <AppVideo
                  src={"https://youtu.be/53kCtub7uek"}
                  alt={"Mobile Ecommerce App "}
                  // borderRadius={3}
                  frameHeight={"57rem"}
                />
              </motion.div>
            }
            firstComponentScale={{
              xs: 12,
              // sm: 0,
              // md: 0,
              lg: 3,
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
                  mt: 10,
                  ml: { lg: 5, xs: 1 },
                }}
              >
                <ProjectTextBox title={""}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ color: "white", mb: 3, display: "flex" }}
                  >
                    {"My First Mobile App"}
                  </Typography>

                  <Paper
                    elevation={0}
                    sx={{ mb: 3, backgroundColor: "transparent" }}
                  >
                    <ProjectDescriptionSubtitle

                    >
                      {"Project Overview"}
                    </ProjectDescriptionSubtitle>
                    <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
                      {
                        "This is the first application that I have ever built for mobile. I designed it from scratch, taking inspiration from designs I found on Dribbble, and then developed it using the Flutter framework."
                      }
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white" }}>
                      {
                        "I've found that I learn better by doing, and it's through applications like this that I've become the developer and scientist that I am today. This is my preferred way of learning."
                      }
                    </Typography>
                  </Paper>
                </ProjectTextBox>

                {/* {`- This is the first application that l have ever build for mobile.

- l designed it from scratch taking inspiration from designs l found on dribble and then developed it using the Flutter framework.

- l have found that l learn better by doing and its through applications like this that l am the developer and scientist that l am today.

- This is my preferred way of learning



Features:

- The application features a lot of different animations

- It uses the provider library to manage state.

- Whilst the application was mostly an MVP l has an authentication integration from Firebase as well as a payment gateway through Square.

`} */}
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

          <ProjectSectionWrapper
            firstComponent={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * mobileAnimationFactor,
                  duration: 0.5 * mobileAnimationFactor,
                }}
                viewport={{ once: true }}
              >
                <MobileAppProjectDescription />
              </motion.div>
            }
            firstComponentScale={{
              xs: 12,
              // sm: 0,
              // md: 0,
              lg: 10,
            }}
            secondComponent={

              <></>
              // <Typography
              //   variant="body2"
              //   component="div"
              //   sx={{
              //     whiteSpace: "break-spaces",
              //     wordBreak: "normal",
              //     display: "flex",
              //     justifyContent: "center",
              //     alignItems: "center",
              //     mt: 10,
              //     ml: { lg: 5, xs: 1 },
              //   }}
              // >
              //   <Typography
              //     variant="h4"
              //     gutterBottom
              //     sx={{
              //       color: "white",
              //       mb: 3,
              //       display: "flex",
              //       alignItems: "center",
              //     }}
              //   >
              //     <PhoneAndroidIcon sx={{ mr: 2 }} />{" "}
              //     {"My First Mobile Application"}
              //   </Typography>

              //   <Paper
              //     elevation={3}
              //     sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}
              //   >
              //     <Typography
              //       variant="h5"
              //       gutterBottom
              //       sx={{
              //         color: "#4169E1",
              //         mb: 2,
              //         display: "flex",
              //         alignItems: "center",
              //       }}
              //     >
              //       <CodeIcon sx={{ mr: 1 }} /> {"Project Overview"}
              //     </Typography>
              //     <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
              //       {
              //         "This is the first application that I have ever built for mobile. I designed it from scratch, taking inspiration from designs I found on Dribbble, and then developed it using the Flutter framework."
              //       }
              //     </Typography>
              //     <Typography variant="body1" sx={{ color: "white" }}>
              //       {
              //         "I've found that I learn better by doing, and it's through applications like this that I've become the developer and scientist that I am today. This is my preferred way of learning."
              //       }
              //     </Typography>
              //   </Paper>
              // </Typography>
            }
            secondComponentScale={{
              // xs: 0,
              // sm: 0,
              // md: 0,
              lg: 12,
            }}
            showDivider={false}
          />
        </ProjectComponent>
      </BodyWrapper>
    </>
  );
};

export default MobileEcommerceApp;
