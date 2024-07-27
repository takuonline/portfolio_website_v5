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

const DataStudioProjectDescription = () => {
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
