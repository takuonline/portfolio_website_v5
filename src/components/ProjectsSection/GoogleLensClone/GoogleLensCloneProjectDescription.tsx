import React from "react";
import {
  Box,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";

import ProjectDescriptionSubtitle from "@/components/Common/ProjectDescriptionSubtitle";

const GoogleLensCloneProjectDescription = () => {
  const techStack = {
    frontend: ["Flutter", "Dart"],
    backend: ["Python"],
    ML: ["PyTorch", "YOLOv7", "ResNet"],
    database: ["Product information database (webscraped)"],
    devops: ["Docker", "AWS EC2 Linux", "Git", "GitHub"],
  };

  const keyFeatures = [
    {
      primary: "Image-based Product Recognition",
      secondary:
        "Point your camera at any object and snap a photo to identify products.",
    },
    {
      primary: "Advanced ML Processing",
      secondary:
        "Uses YOLOv7 and ResNet models to extract the most prominent object in the image.",
    },
    {
      primary: "Product Information Retrieval",
      secondary:
        "Searches a database of product information scraped from GAME retailer.",
    },
    {
      primary: "Selective Object Search",
      secondary:
        "Allows users to select specific products in the image using a bounding box.",
    },
  ];

  return (
    <>
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
          Technical Implementation
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
    </>
  );
};

export default GoogleLensCloneProjectDescription;
