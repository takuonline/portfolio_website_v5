import ProjectTextBox from "../ProjectTextBox";

import BodyWrapper from "../../Common/BodyWrapper";
import AppImage from "../../Common/AppImage";

import AppVideo from "../../Common/AppVideo";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";
import ProjectComponent from "../ProjectComponent";
import ProjectSectionWrapper from "../ProjectSectionWrapper";
import Link from "next/link";
import { IoLink, IoLogoGithub } from "react-icons/io5";

import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import ProjectDescriptionSubtitle from "@/components/Common/ProjectDescriptionSubtitle";

const SavvyAnalyticsProjectDescription = () => {
  const techStack = {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Shadcn UI",
    ],
    backend: ["Django", "Django REST Framework", "LangChain"],
    database: ["PostgreSQL"],
    devops: ["Nginx", "Docker", "Kubernetes", "ArgoCD"],
  };
  const keyFeatures = [
    {
      primary: "Graph-like Structure",
      secondary:
        "Incorporates graph-like structures to facilitate complex reasoning paths, influenced by cutting-edge research like the 'Tree of Thought' paper.",
    },
    {
      primary: "Customizable Workflow",
      secondary:
        "Tailored to support diverse prompting strategies and multi-step analyses.",
    },
    {
      primary: "Intuitive Design",
      secondary:
        "While more advanced than ChatGPT, the interface maintains a clean, user-friendly design.",
    },
  ];
  const theme = useTheme();

  const subtitleStyle = {
    color: "primary.main", // Royal blue for contrast
    fontWeight: 700,
    mb: 2,
    textTransform: "uppercase",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    paddingBottom: "8px",
    display: "inline-block",
  };
  return (
    <Paper
      sx={{
        maxWidth: "100%",
        margin: "auto",
        py: 3,
        backgroundColor: "transparent",
      }}
    >
      <Box sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle>
          Project Overview
        </ProjectDescriptionSubtitle>
        <Typography variant="body1" paragraph>
          {
            "Inspired by OpenAI's ChatGPT interface, I set out to create a more sophisticated user interface tailored for complex workflows involving large language models (LLMs). Savvy Analytics is the result—a powerful, intuitive platform designed to support intricate prompting and advanced reasoning processes."
          }
        </Typography>
      </Box>

      <Box sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
        <Typography variant="h5" sx={subtitleStyle} gutterBottom>
          Key Features
        </Typography>
        <List>
          {keyFeatures.map((feature, index) => (
            <ListItem key={index} disableGutters>
              <ListItemText
                primary={feature.primary}
                secondary={feature.secondary}
                sx={{ color: "white" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle>
          Technical Implementation
        </ProjectDescriptionSubtitle>
        <Grid
          container
          spacing={2}
          sx={{
            p: 3,
          }}
        >
          {Object.entries(techStack).map(([category, technologies]) => (
            <Grid item xs={12} sm={6} key={category}>
              <Typography variant="h6" gutterBottom>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {technologies.map((tech) => (
                  <Chip key={tech} label={tech} variant="outlined" />
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ p: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle>Reflections</ProjectDescriptionSubtitle>

        <Box
          sx={{
            p: 3,
          }}
        >
          <Typography variant="body1" paragraph>
            This project not only allowed me to explore advanced LLM interfaces
            but also provided an opportunity to work with a comprehensive tech
            stack. While some components like Kubernetes might be considered
            overkill for this application, they demonstrate my ability to work
            with enterprise-level technologies and my commitment to continuous
            learning.
          </Typography>
          <Typography variant="body1">
            The Savvy Analytics interface opens up new possibilities for complex
            LLM interactions, potentially revolutionizing how we approach
            AI-assisted analysis and decision-making processes.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

const DataStudio = (props: {}) => {
  const TextBoxSize = {
    xs: 12,
    md: 8,
    lg: 8,
  };

  const AppImageSize = {
    xs: 10,
    md: 6,
    lg: 8,
  };

  const AppVideoSize = {
    xs: 12,
    sm: 6,
    lg: 10,
  };

  const IconSize = "2rem";

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
                <SavvyAnalyticsProjectDescription />
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
