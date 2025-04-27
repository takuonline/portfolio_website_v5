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
import TechStack from "@/components/Common/TechStack";
import { TechType } from "@/types/techStackTypes";

const AdhocInsightsProjectDescription = () => {
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
          { type: TechType.PYTHON },
          { type: TechType.DJANGO },
          { type: TechType.DJANGO_REST_FRAMEWORK },
          { type: TechType.DJANGO_CHANNELS },
        ],
      },
      {
        section: "Database",
        items: [{ type: TechType.POSTGRESQL }],
      },
      {
        section: "DevOps",
        items: [{ type: TechType.NGINX }, { type: TechType.DOCKER }],
      },
      {
        section: "Cloud",
        items: [{ type: TechType.HETZNER_CLOUD }],
      },
    ],
  };

  const keyFeatures = [
    {
      primary: "Conversational Data Analysis",
      secondary:
        "Ask questions about your data in plain English and get instant insights through natural dialogue - no technical knowledge required.",
    },
    {
      primary: "Visual Insights",
      secondary:
        "Automatically generates clear line and bar charts to help you understand trends and patterns in your data at a glance.",
    },
    {
      primary: "Interactive Data Tables",
      secondary:
        "View detailed data in easy-to-read tables that you can sort, filter and export to spreadsheets for further analysis.",
    },
    {
      primary: "Multi-Dataset Support",
      secondary:
        "Explore and analyze different types of data, from financial metrics to recipe collections, all through simple conversation.",
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
            "Adhoc Insights transforms complex data analysis into simple conversations, making data exploration accessible to everyone, regardless of their technical background. Using advanced AI technology powered by Claude 3.5 Sonnet, the platform enables users to gain valuable insights from their data through natural dialogue."
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
    </>
  );
};

export default AdhocInsightsProjectDescription;
