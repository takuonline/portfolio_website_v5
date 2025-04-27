import React from "react";
import {
  Box,

  ListItem,
  ListItemText,
  Grid,
  List,
} from "@mui/material";

import ProjectDescriptionSubtitle from "@/components/Common/ProjectDescriptionSubtitle";
import TechStack from "@/components/Common/TechStack";
import { TechType } from "@/types/techStackTypes";

const GoogleLensCloneProjectDescription = () => {
  const techStackData = {
    sections: [
      {
        section: "Frontend",
        items: [{ type: TechType.FLUTTER }, { type: TechType.DART }],
      },
      {
        section: "Backend",
        items: [{ type: TechType.PYTHON }],
      },
      {
        section: "ML",
        items: [
          { type: TechType.PYTORCH },
          { type: TechType.YOLOV7 },
          { type: TechType.RESNET },
        ],
      },

      {
        section: "DevOps",
        items: [
          { type: TechType.DOCKER },
          { type: TechType.AWS_EC2 },
          { type: TechType.GIT },
          { type: TechType.GITHUB },
        ],
      },
    ],
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
          <TechStack sections={techStackData.sections} />
        </Grid>
      </Box>
    </>
  );
};

export default GoogleLensCloneProjectDescription;
