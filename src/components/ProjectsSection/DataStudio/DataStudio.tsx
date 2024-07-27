import ProjectTextBox from "../ProjectTextBox";

import BodyWrapper from "../../Common/BodyWrapper";
import AppImage from "../../Common/AppImage";

import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";
import ProjectComponent from "../ProjectComponent";
import ProjectSectionWrapper from "../ProjectSectionWrapper";

import React from "react";
import { Box, Typography } from "@mui/material";
import DataStudioProjectDescription from "./DataStudioProjectDescription";

const DataStudio = () => {
  const TextBoxSize = {
    xs: 12,
    md: 8,
    lg: 8,
  };

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.5 : 1;

  return (
    <BodyWrapper>
      <ProjectComponent
        title={"Savvy Analytics: Reimagining the LLM Interface"}
        skills={[
          "Frontend development",
          "Backend development",
          "Machine learning",
        ]}
        bgImage={
          <Box
            sx={{
              backgroundColor: "#1A2342",
              width: "100%",
              height: "100%",
            }}
          >
            <AppImage
              showFrame={false}
              src="/static/images/data-studio.png"
              alt="Data studio app "
              borderRadius={3 * 3}
              width={1703}
              height={1280}
              size={{
                xs: 10,
                sm: 8,
                lg: 5.5,
              }}
              sx={{
                border: "5px solid white",
                borderRadius: 1 * 3,
                position: "absolute",
                right: "22rem",
                top: "10rem",

                [theme.breakpoints.down("lg")]: {
                  right: "9rem",
                  top: "8rem",
                },

                [theme.breakpoints.down("md")]: {
                  right: "9%",
                  top: "15rem",
                },
              }}
            />
          </Box>
          // <Box
          //   sx={{
          //     margin:10,
          //     backgroundColor: "#0B0B4555",

          //   }}>
          // <AppImage
          //   showFrame={false}
          //   src="/static/images/data-studio.png"
          //   alt="savvy shopper mockup image "
          //   height={765}
          //   width={1440}

          //   maxHeight={"90vh"}
          // />
          // </Box>
        }
      >
        {/* ////////////////////////////////////   ROW 1   /////////////////////////////////////////////////////////  */}
        <ProjectSectionWrapper
          firstComponent={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * mobileAnimationFactor,
                duration: 0.3 * mobileAnimationFactor,
              }}
              viewport={{ once: true }}
            >
              <AppImage
                showFrame={false}
                src="/static/images/data-studio.gif"
                alt="savvy shopper mockup image "
                height={765}
                width={1440}
                maxHeight={"90vh"}
              />

              {/* <AppVideo
                  showFrame={false}
                  // frameType={FrameType.MacBook}
                  src="https://youtu.be/pA6WZhpqTWI"
                  alt=" Responsive React Dashboard "
                  size={{ xs: 12, lg:24 }}
                  aspectRatio={3840 / 2160}
                  borderRadius={5}
                /> */}
            </motion.div>
          }
          firstComponentScale={{
            // xs: 0,
            // sm: 0,
            // md: 0,
            lg: 10,
          }}
          secondComponent={
            <>
              <Typography variant="h4" sx={{}}>
                {" Savvy Analytics: Reimagining the LLM Interface"}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  columnGap: 2,
                  mb: { sm: 4, xs: 5 },
                  mt: { sm: 2, xs: 3 },
                }}
              >
                {/* <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/takuonline/savvy_shoprite_food_web_dashboard"
                  >
                    <IoLogoGithub size={IconSize} />
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://shoprite-dashboard.herokuapp.com/"
                  >
                    <IoLink size={IconSize} />{" "}
                  </Link> */}
              </Box>

              <ProjectTextBox title={"Project Description"} size={TextBoxSize}>
                <DataStudioProjectDescription />
              </ProjectTextBox>
            </>
          }
          secondComponentScale={{
            // xs: 0,
            // sm: 0,
            // md: 0,
            lg: 12,
          }}
        />
      </ProjectComponent>
    </BodyWrapper>
  );
};

export default DataStudio;
