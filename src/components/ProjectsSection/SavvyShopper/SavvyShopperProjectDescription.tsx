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

const SavvyShopperProjectDescription = () => {
  const techStack = ["Flutter", "Provider", "Firebase", "Square"];

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
    <Paper
      sx={{
        margin: "auto",
        p: {
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
        },
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        itemsAlign: "start",
      }}
    >
      <Paper elevation={0} sx={{ p: 3, backgroundColor: "transparent" }}>
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

      <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle>
          {"Learning Experience"}
        </ProjectDescriptionSubtitle>
        <Typography variant="body2" sx={{ color: "white" }}>
          {
            "While the application was mostly an MVP, it provided invaluable learning experiences:"
          }
        </Typography>
        <List disablePadding>
          <ListItem disableGutters>
            <Typography variant="body2" sx={{ color: "white" }}>
              {"Hands-on experience with mobile app development"}
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body2" sx={{ color: "white" }}>
              {"Practical application of UI/UX design principles"}
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <Typography variant="body2" sx={{ color: "white" }}>
              {"Integration of third-party services (Firebase, Square)"}
            </Typography>
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={0} sx={{ p: 3, mb: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle>
          {"Technologies Used"}
        </ProjectDescriptionSubtitle>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            />
          ))}
        </Box>
      </Paper>
    </Paper>
  );
};

export default SavvyShopperProjectDescription;
