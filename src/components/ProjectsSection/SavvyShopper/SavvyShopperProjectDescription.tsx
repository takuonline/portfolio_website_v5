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

const SavvyShopperProjectDescription = () => {
  const techStackData = {
    sections: [
      {
        section: "Web Crawler",
        items: [
          { type: TechType.PYTHON },
          { type: TechType.SCRAPY_FRAMEWORK },
          { type: TechType.SCRAPYD },
          { type: TechType.HEROKU, description: "Hosting the crawlers" },
          {
            type: TechType.AWS_LAMBDA,
            description: "Scheduling and triggering the crawlers",
          },
        ],
      },
      {
        section: "Backend",
        items: [
          { type: TechType.PYTHON },
          { type: TechType.FLASK },
          { type: TechType.FLASK_RESTFUL },
          { type: TechType.NUMPY },
          { type: TechType.PANDAS },
        ],
      },
      {
        section: "Database",
        items: [{ type: TechType.DYNAMODB }, { type: TechType.MONGODB }],
      },
      {
        section: "Mobile App",
        items: [
          {
            type: TechType.FLUTTER,
            description:
              "Includes UI, rest api connection to backend, state management",
          },
        ],
      },
      {
        section: "Chrome Extension",
        items: [
          { type: TechType.JAVASCRIPT },

          { type: TechType.CSS },
          { type: TechType.HTML },
        ],
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

        <TechStack sections={techStackData.sections} />
      </Paper>
    </Paper>
  );
};

export default SavvyShopperProjectDescription;
