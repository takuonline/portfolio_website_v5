import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import AppVideo from "../../../Common/AppVideo";
import BodyWrapper from "../../../Common/BodyWrapper";
import ProjectComponent from "../../ProjectComponent";

import ProjectSectionWrapper from "../../ProjectSectionWrapper";

import React from "react";
import { Box, Typography, Paper } from "@mui/material";

import ProjectTextBox from "../../ProjectTextBox";
import ProjectDescriptionSubtitle from "@/components/Common/ProjectDescriptionSubtitle";
import MobileAppProjectDescription from "../MobileAppProjectDescription";

const MobileEcommerceApp = () => {
  const theme = useTheme();

  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.6 : 1;
  return (
    <>
      <BodyWrapper>
        <ProjectComponent
          title={"Mobile Ecommerce App"}
          skills={["UI/UX Design", "Mobile development"]}
          bgImage={
            <Box
              sx={{
                backgroundColor: "#FFCB5F99",
                width: "100%",
                height: "100%",
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

        </ProjectComponent>
      </BodyWrapper>
    </>
  );
};

export default MobileEcommerceApp;
