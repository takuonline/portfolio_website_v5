import React from "react";
import {
  Box,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

import ProjectDescriptionSubtitle from "@/components/Common/ProjectDescriptionSubtitle";
import { TechType } from "@/types/techStackTypes";
import TechStack from "@/components/Common/TechStack";

const MobileAppProjectDescription = () => {
  const techStackData = {
    sections: [
      {
        section: "Frontend",
        items: [{ type: TechType.FLUTTER }, { type: TechType.DART }],
      },
    ],
  };

  const keyFeatures = [
    {
      primary: "Various animations",
      secondary:
        "The app features a variety of animated elements, enhancing user experience and interface interactivity.",
    },
    {
      primary: "State management with Provider",
      secondary:
        "Utilizes the Provider library for efficient and scalable state management across the application.",
    },
    {
      primary: "Firebase authentication",
      secondary:
        "Implements secure user authentication through Firebase, ensuring protected access to app features.",
    },
    {
      primary: "Square payment gateway integration",
      secondary:
        "Incorporates Square's payment gateway, allowing for smooth and secure transaction processing within the app.",
    },
  ];

  return (
    <>
      <Paper elevation={0} sx={{ py: 3, backgroundColor: "transparent" }}>
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
      </Paper>

      <Paper
        elevation={0}
        sx={{ py: 3, mb: 3, backgroundColor: "transparent" }}
      >
        <ProjectDescriptionSubtitle>
          {"Learning Experience"}
        </ProjectDescriptionSubtitle>
        <Typography variant="body2" sx={{ color: "white" }}>
          {
            "While the application was mostly an MVP, it provided invaluable learning experiences:"
          }
        </Typography>
        <List>
          <ListItem>
            <Typography
              variant="body2"
              sx={{ display: "list-item", color: "white" }}
            >
              {"Hands-on experience with mobile app development"}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant="body2"
              sx={{ display: "list-item", color: "white" }}
            >
              {"Practical application of UI/UX design principles"}
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant="body2"
              sx={{ display: "list-item", color: "white" }}
            >
              {"Integration of third-party services (Firebase, Square)"}
            </Typography>
          </ListItem>
        </List>
      </Paper>

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
  );
};

export default MobileAppProjectDescription;
