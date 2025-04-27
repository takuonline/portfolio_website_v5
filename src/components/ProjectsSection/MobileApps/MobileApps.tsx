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
import GoogleLensCloneProjectDescription from "./GoogleLensCloneProjectDescription";

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
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                background:
                  "linear-gradient(to bottom right, #FFCB5F99 50%, #0093E955 50%)",
                position: "relative",
                minHeight: { xs: "160vh", sm: "140vh", md: "100vh" },
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                padding: { xs: 2, sm: 4, md: 0 },
              }}
            >
              {/* First video - Left side */}
              <AppVideo
                src={"https://youtu.be/0EfVCwQ4dFQ"}
                alt={"Reflectly App "}
                size={{
                  xs: 5,
                  sm: 4,
                  lg: 2,
                }}
                borderRadius={6}
                sx={{
                  position: { xs: "absolute", md: "absolute" },
                  left: { xs: "50%", md: "25%" },
                  top: { xs: "16%", md: "50%" },
                  transform: {
                    xs: "translate(-50%, 0)",
                    md: "translate(-50%, -50%)",
                  },
                  zIndex: 2,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  [theme.breakpoints.down("md")]: {
                    left: "50%",
                    top: "16%",
                  },
                  [theme.breakpoints.down("sm")]: {
                    top: "15%",
                    width: "70%",
                  },
                }}
                showFrame={false}
              />

              {/* Second video - Middle/Top */}
              <AppVideo
                src={"https://youtube.com/shorts/d4Py46Wakw8"}
                alt={"Google lens clone "}
                aspectRatio={15 / 32}
                borderRadius={5}
                size={{
                  xs: 4.5,
                  sm: 3.5,
                  md: 3,
                  lg: 1.8,
                }}
                sx={{
                  position: { xs: "absolute", md: "absolute" },
                  left: { xs: "50%", sm: "50%", md: "50%" },
                  top: { xs: "48%", md: "25%" },
                  transform: {
                    xs: "translate(-50%, 0)",
                    md: "translate(-50%, 0)",
                  },
                  zIndex: 3,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  [theme.breakpoints.down("md")]: {
                    left: "50%",
                    top: "50%",
                  },
                  [theme.breakpoints.down("sm")]: {
                    top: "48%",
                    width: "55%",
                  },
                }}
                showFrame={false}
              />

              {/* Third video - Right side */}
              <AppVideo
                src={"https://youtu.be/53kCtub7uek"}
                alt={"Mobile Ecommerce video showcase "}
                borderRadius={3}
                size={{
                  xs: 5,
                  sm: 4,
                  md: 4,
                  lg: 2,
                }}
                sx={{
                  position: { xs: "absolute", md: "absolute" },
                  right: { xs: "auto", md: "25%" },
                  left: { xs: "50%", md: "auto" },
                  top: { xs: "80%", md: "50%" },
                  transform: {
                    xs: "translate(-50%, 0)",
                    md: "translate(50%, -50%)",
                  },
                  zIndex: 2,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  [theme.breakpoints.down("md")]: {
                    left: "50%",
                    right: "auto",
                    top: "82%",
                  },
                  [theme.breakpoints.down("sm")]: {
                    top: "80%",
                    width: "70%",
                  },
                }}
                showFrame={false}
              />
            </Box>
          }
        >
          {/* ///////////////////////////////////////////////////////////////   Reflectly App    */}

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

          {/* ///////////////////////////////////////////////////////////////   Ecommerce App    */}

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

              lg: 10,
            }}
            secondComponent={<></>}
            secondComponentScale={{
              lg: 12,
            }}
            showDivider={true}
          />

          {/* ///////////////////////////////////////////////////////////////   Google Lens Clone    */}

          <ProjectSectionWrapper
            firstComponent={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * mobileAnimationFactor,
                  duration: 0.2 * mobileAnimationFactor,
                }}
                viewport={{ once: true }}
              >
                <AppVideo
                  src={"https://youtube.com/shorts/d4Py46Wakw8"}
                  // src={"../../public/static/videos/Google lens clone.mp4"}
                  alt={"Google lens clone "}
                  aspectRatio={15 / 32}
                  size={{
                    xs: 12,
                    lg: 9,
                  }}
                  frameHeight={"51rem"}
                />
              </motion.div>
            }
            firstComponentScale={{
              lg: 4,
            }}
            secondComponent={
              <>
                <Box sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
                  <ProjectDescriptionSubtitle>
                    {"Project Overview"}
                  </ProjectDescriptionSubtitle>
                  <Typography variant="body2" paragraph>
                    {`The first time I used Google Lens, I was amazed. It felt like magic. All I had to do was snap a picture and it would quickly search the internet for relevant information on the object I was pointing my camera at, regardless of how many other objects were in the frame.
`}
                  </Typography>

                  <Typography variant="body2" paragraph>
                    {`

Years later, I decided to take on the challenge of building my own version of this incredible technology, starting from scratch. Although it was a challenging journey, I delved deep into the world of machine learning and conducted extensive research to gain the necessary knowledge. Eventually, I succeeded in creating my own "Google Lens clone."

`}
                  </Typography>

                  <Typography variant="body2" paragraph>
                    {`


This project was one of my greatest achievements in the world of full-stack machine learning. I was able to implement multiple deep learning models within a full-stack application and build the entire system end-to-end without any assistance. It's a project I'm incredibly proud of.
`}
                  </Typography>
                </Box>
              </>
            }
            secondComponentScale={{
              lg: 6,
            }}
            showDivider={false}
          />

          <Box my={10} />

          <ProjectSectionWrapper
            firstComponent={
              <>
                <ProjectDescriptionSubtitle>
                  {"Project architecture visualisation"}
                </ProjectDescriptionSubtitle>

                <iframe
                  style={{
                    minHeight: isMobileView ? "23rem" : "40rem",
                    height: "auto",
                    width: "100%",
                    borderRadius: 15,
                  }}
                  src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Google%20lense%20clone.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1hwp_0f3yndP-eoWONO2wO0LGbcOD0rpV%26export%3Ddownload"
                />
              </>
            }
            firstComponentScale={{
              lg: 10,
            }}
            secondComponent={<GoogleLensCloneProjectDescription />}
            secondComponentScale={{
              lg: 10,
            }}
            showDivider={false}
          />
        </ProjectComponent>
      </BodyWrapper>
    </>
  );
};

export default MobileApps;
