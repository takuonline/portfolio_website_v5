import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import AppVideo from "../../Common/AppVideo";
import BodyWrapper from "../../Common/BodyWrapper";
import ProjectComponent from "../ProjectComponent";
import ProjectSectionWrapper from "../ProjectSectionWrapper";

import React from "react";
import { Box, Typography, List, ListItem, Paper } from "@mui/material";

import ProjectDescriptionSubtitle from "@/components/Common/ProjectDescriptionSubtitle";
import TechStack from "@/components/Common/TechStack";
import { TechType } from "@/types/techStackTypes";
import ProjectTextBox from "../ProjectTextBox";
import MobileAppProjectDescription from "./MobileAppProjectDescription";

const MobileApps = (props: {}) => {
  const techStackData = {
    sections: [
      {
        section: "Frontend",
        items: [{ type: TechType.FLUTTER }, { type: TechType.DART }],
      },
    ],
  };
  const theme = useTheme();
  const viewport = { once: true };
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.5 : 1;
  return (
    <>
      <BodyWrapper>
        <ProjectComponent
          title={"Mobile Apps"}
          skills={["Mobile development"]}
          bgImage={
            //     <Box
            //     sx={{
            //       width: "100%",
            //       height: "100%",
            //       display: "flex",
            //       background: "linear-gradient(to bottom right, #FFCB5F99 50%, #0093E955 50%)",
            //       position: "relative"
            //     }}
            //   >
            //     <AppVideo
            //       src={"https://youtu.be/0EfVCwQ4dFQ"}
            //       alt={"Reflectly App "}
            //       size={{
            //         xs: 7,
            //         sm: 4,
            //         lg: 2,
            //       }}
            //       borderRadius={6}
            //       sx={{
            //         position: "absolute",
            //         left: "25%",
            //         top: "50%",
            //         transform: "translate(-50%, -50%)",
            //         [theme.breakpoints.down("md")]: {
            //           left: "30%",
            //           top: "40%",
            //         },
            //       }}
            //       showFrame={false}
            //     />

            //     <AppVideo
            //       src={"https://youtu.be/53kCtub7uek"}
            //       alt={"Mobile Ecommerce video showcase "}
            //       borderRadius={3}
            //       size={{
            //         xs: 7,
            //         sm: 4,
            //         md: 4,
            //         lg: 2,
            //       }}
            //       sx={{
            //         position: "absolute",
            //         right: "25%",
            //         top: "50%",
            //         transform: "translate(50%, -50%)",
            //         [theme.breakpoints.down("md")]: {
            //           right: "30%",
            //           top: "60%",
            //         },
            //       }}
            //       showFrame={false}
            //     />
            //   </Box>

            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                background:
                  "linear-gradient(to bottom right, #FFCB5F99 50%, #0093E955 50%)",
                position: "relative",
              }}
            >
              <AppVideo
                src={"https://youtu.be/0EfVCwQ4dFQ"}
                alt={"Reflectly App "}
                size={{
                  xs: 7,
                  sm: 4,
                  lg: 2,
                }}
                borderRadius={6}
                sx={{
                  position: "absolute",
                  left: "25%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  [theme.breakpoints.down("md")]: {
                    left: "30%",
                    top: "40%",
                  },
                }}
                showFrame={false}
              />

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
                  right: "25%",
                  top: "50%",
                  transform: "translate(50%, -50%)",
                  [theme.breakpoints.down("md")]: {
                    right: "30%",
                    top: "60%",
                  },
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
              lg: 4,
            }}
            secondComponent={
              <>
                <ProjectDescriptionSubtitle>
                  {"Project Overview"}
                </ProjectDescriptionSubtitle>

                <List disablePadding>
                  <ListItem disableGutters>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {
                        "Reflectly is one of the most popular journaling apps in the world."
                      }
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {
                        "This app helped me boost my confidence and reach out to some very cool developers."
                      }
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {
                        " This is one of the toughest mobile apps out there because of its complex ui and l felt that if l could develop something like this l would be able to do just about everything else."
                      }
                    </Typography>
                  </ListItem>
                </List>

                <Paper
                  elevation={0}
                  sx={{ py: 3, mb: 3, backgroundColor: "transparent" }}
                >
                  <ProjectDescriptionSubtitle>
                    {"Technologies Used"}
                  </ProjectDescriptionSubtitle>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    <TechStack sections={techStackData.sections} />
                  </Box>
                </Paper>
              </>
            }
            secondComponentScale={{
              lg: 6,
            }}
            showDivider={true}
          />

          <ProjectSectionWrapper
            secondComponent={
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
            secondComponentScale={{
              xs: 12,
              lg: 3,
            }}
            firstComponent={
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
                    {"Ecommerce App"}
                  </Typography>

                  <Paper
                    elevation={0}
                    sx={{ mb: 3, backgroundColor: "transparent" }}
                  >
                    <ProjectDescriptionSubtitle>
                      {"Project Overview"}
                    </ProjectDescriptionSubtitle>
                    <Typography variant="body2" sx={{ color: "white", mb: 2 }}>
                      {
                        "This is the first application that I have ever built for mobile. I designed it from scratch, taking inspiration from designs I found on Dribbble, and then developed it using the Flutter framework."
                      }
                    </Typography>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {
                        "I've found that I learn better by doing, and it's through applications like this that I've become the developer and scientist that I am today. This is my preferred way of learning."
                      }
                    </Typography>
                  </Paper>
                </ProjectTextBox>
              </Typography>
            }
            firstComponentScale={{
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

export default MobileApps;
