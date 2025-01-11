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

const AdhocInsightsProjectDescription = () => {
  const techStack = {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Shadcn UI",
    ],
    backend: ["Django", "Django REST Framework", "Django Channels"],
    database: ["PostgreSQL"],
    devops: ["Nginx", "Docker"],
    misc: ["Hetzner Cloud", ],
  };
  const keyFeatures = [
    {
      primary: "Conversational Data Analysis",
      secondary: "Ask questions about your data in plain English and get instant insights through natural dialogue - no technical knowledge required.",
    },
    {
      primary: "Visual Insights",
      secondary: "Automatically generates clear line and bar charts to help you understand trends and patterns in your data at a glance.",
    },
    {
      primary: "Interactive Data Tables",
      secondary: "View detailed data in easy-to-read tables that you can sort, filter and export to spreadsheets for further analysis.",
    },
    {
      primary: "Multi-Dataset Support",
      secondary: "Explore and analyze different types of data, from financial metrics to recipe collections, all through simple conversation.",
    }
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

      {/* <Box sx={{ p: 3, backgroundColor: "transparent" }}>
        <ProjectDescriptionSubtitle>Reflections</ProjectDescriptionSubtitle>

        <Box sx={{}}>
          <Typography variant="body2" paragraph>
            {`Building Clipbard has been an exciting journey into the intersection of multiple AI technologies. The integration of Large Language Models for story generation, image generation models for scene creation, and speech synthesis for voiceovers presented unique technical challenges. This project showcases how different AI capabilities can be orchestrated to create a seamless content generation pipeline.`}
          </Typography>

          <Typography variant="body2" paragraph>
            {`The technical implementation required careful consideration of scalability and performance. While the current architecture might seem robust for a startup, features like containerization and cloud-native deployment ensure we can handle growing user demands and maintain consistent performance across different regions. The addition of caching mechanisms and optimization of the video processing pipeline demonstrates my focus on user experience and system efficiency.`}
          </Typography>

          <Typography variant="body2" paragraph>
            {`Looking ahead, Clipbard represents just the beginning of what's possible in automated content creation. The platform's ability to transform text into engaging visual stories opens up new possibilities for education, training, and digital storytelling. As AI technologies continue to evolve, we're well-positioned to incorporate new capabilities and further enhance the creative possibilities for our users.`}
          </Typography>
        </Box>
      </Box> */}
    </>
  );
};

export default AdhocInsightsProjectDescription;
