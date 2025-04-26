import React from "react";
import {
  Box,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
} from "@mui/material";
import ProjectDescriptionSubtitle from "@/components/Common/ProjectDescriptionSubtitle";
import { TechType } from "@/types/techStackTypes";
import TechStack from "@/components/Common/TechStack";

const DataStudioProjectDescription = () => {
  const techStackData = {
    sections: [
      {
        section: "Frontend",
        items: [
          { type: TechType.NEXTJS },
          { type: TechType.TYPESCRIPT },
          { type: TechType.TAILWIND_CSS },
          { type: TechType.REDUX_TOOLKIT },
          { type: TechType.SHADCN_UI },
        ],
      },
      {
        section: "Backend",
        items: [
          { type: TechType.DJANGO },
          { type: TechType.DJANGO_REST_FRAMEWORK },
          { type: TechType.LANGCHAIN },
        ],
      },
      {
        section: "Database",
        items: [{ type: TechType.POSTGRESQL }],
      },
      {
        section: "DevOps",
        items: [
          { type: TechType.NGINX },
          { type: TechType.DOCKER },
          { type: TechType.KUBERNETES },
          { type: TechType.ARGOCD },
        ],
      },
    ],
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

  return (
    <>
      <Box sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle>
          Project Overview
        </ProjectDescriptionSubtitle>
        <Typography variant="body2" paragraph>
          {
            "Inspired by OpenAI's ChatGPT interface, I set out to create a more sophisticated user interface tailored for complex workflows involving large language models (LLMs). Savvy Analytics is the result—a powerful, intuitive platform designed to support intricate prompting and advanced reasoning processes."
          }
        </Typography>
      </Box>

      <Box sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle>Key Features</ProjectDescriptionSubtitle>
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
          {"Technical Implementation"}
        </ProjectDescriptionSubtitle>
        <Grid
          container
          spacing={2}
          sx={{
            p: 3,
            pl: 0,
          }}
        >
          <TechStack sections={techStackData.sections} />
        </Grid>
      </Box>

      <Box sx={{ p: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle>Reflections</ProjectDescriptionSubtitle>

        <Box sx={{}}>
          <Typography variant="body2" paragraph>
            {`This project not only allowed me to explore advanced LLM interfaces but also provided an opportunity to work with a comprehensive techstack. While some components like Kubernetes might be considered overkill for this application, they demonstrate my ability to work with enterprise-level technologies and my commitment to continuous learning.`}
          </Typography>
          <Typography variant="body2" paragraph>
            {`The Savvy Analytics interface opens up new possibilities for complex LLM interactions, potentially revolutionizing how we approach AI-assisted analysis and decision-making processes.`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default DataStudioProjectDescription;
