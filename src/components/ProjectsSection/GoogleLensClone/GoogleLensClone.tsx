import { Typography, Box, useMediaQuery, useTheme, Paper } from "@mui/material";

import BodyWrapper from "../../Common/BodyWrapper";
import AppVideo from "../../Common/AppVideo";
import { motion } from "framer-motion";
import ProjectComponent from "../ProjectComponent";
import ProjectSectionWrapper from "../ProjectSectionWrapper";
import GoogleLensCloneProjectDescription from "./GoogleLensCloneProjectDescription";
import ProjectDescriptionSubtitle from "@/components/Common/ProjectDescriptionSubtitle";

const GoogleLensClone = (props: {}) => {

  const AppVideoSize = {
    xs: 12,
    lg: 9,
  };

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.6 : 1;
  return (
    <BodyWrapper>
      <ProjectComponent
        title={"Google Lens Clone - AI powered Image Search"}
        skills={["Machine learning", "Backend development"]}
        bgImage={
          <Box
            sx={{
              backgroundColor: "#0B0B4555",
              width: "100%",
              height: "100%",
            }}
          >
            <AppVideo
              src={"https://youtube.com/shorts/d4Py46Wakw8"}
              alt={"Google lens clone "}
              aspectRatio={15 / 32}
              borderRadius={5}
              // frameHeight={"35rem"}

              size={{
                xs: 6,
                sm: 4,
                md: 3,
                lg: 1.8,
              }}
              sx={{
                width: "100%",
                position: "absolute",
                right: "22rem",
                top: "10rem",

                [theme.breakpoints.down("md")]: {
                  right: "25%",
                  top: "8rem",
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
                duration: 0.2 * mobileAnimationFactor,
              }}
              viewport={{ once: true }}
            >
              <AppVideo
                src={"https://youtube.com/shorts/d4Py46Wakw8"}
                // src={"../../public/static/videos/Google lens clone.mp4"}
                alt={"Google lens clone "}
                aspectRatio={15 / 32}
                size={AppVideoSize}
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
            // xs: 0,
            // sm: 0,
            // md: 0,
            lg: 10,
          }}
          showDivider={false}
        />
      </ProjectComponent>
    </BodyWrapper>
  );
};

export default GoogleLensClone;
