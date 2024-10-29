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

const ClipbardProjectDescription = () => {
  const techStack = {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Shadcn UI",
    ],
    backend: ["Django", "Django REST Framework"],
    database: ["PostgreSQL"],
    devops: ["Nginx", "Docker"],
    misc: ["Hetzner Cloud", "Cloudflare R2", "Brevo(Sendinblue)"],
  };
  const keyFeatures = [
    {
      primary: "AI Story Generation",
      secondary:
        "Transform any topic into engaging narratives using advanced language models, perfect for educational content, explanations, and creative storytelling.",
    },
    {
      primary: "Automated Scene Creation",
      secondary:
        "Our AI automatically breaks down stories into scenes and generates custom images for each moment, creating visually compelling narratives.",
    },
    {
      primary: "Professional Voiceover",
      secondary:
        "Convert text to natural-sounding speech with AI-powered voiceover technology, available in multiple languages and accents.",
    },
    {
      primary: "Instant Video Assembly",
      secondary:
        "Automatically combine images, voiceover, and subtitles into professional-quality videos in minutes instead of hours.",
    },
    {
      primary: "Education-First Design",
      secondary:
        "Specifically optimized for creating educational content, explainer videos, and learning materials that engage and inform.",
    },
    {
      primary: "Pay-As-You-Go Flexibility",
      secondary:
        "No subscriptions required - create videos on demand with transparent pricing and a free first video for new users.",
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
            "Clipbard emerged from a simple yet powerful idea: making AI-powered storytelling accessible to everyone. Inspired by the growing need for engaging educational content and the challenges faced by content creators, I developed a platform that automates the entire video creation process. By combining advanced language models for story generation, AI image generation for visualization, and speech synthesis for narration, Clipbard transforms the way educational and explanatory content is created."
          }
        </Typography>
        <Typography variant="body2" paragraph>
          {
            "The platform streamlines what traditionally requires multiple tools and technical expertise - story writing, image creation, voice recording, and video editing - into a single, intuitive workflow. What started as an experiment in AI integration has evolved into a comprehensive solution that's particularly resonating with educators, content creators, and corporate trainers worldwide."
          }
        </Typography>
        <Typography variant="body2" paragraph>
          {
            "Through innovative use of AI technologies and careful attention to user experience, Clipbard demonstrates how complex technical capabilities can be made accessible through thoughtful design and automation. The platform's success in simplifying video content creation while maintaining professional quality showcases the transformative potential of AI in creative workflows."
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
            {`Building Clipbard has been an exciting journey into the intersection of multiple AI technologies. The integration of Large Language Models for story generation, image generation models for scene creation, and speech synthesis for voiceovers presented unique technical challenges. This project showcases how different AI capabilities can be orchestrated to create a seamless content generation pipeline.`}
          </Typography>

          <Typography variant="body2" paragraph>
            {`The technical implementation required careful consideration of scalability and performance. While the current architecture might seem robust for a startup, features like containerization and cloud-native deployment ensure we can handle growing user demands and maintain consistent performance across different regions. The addition of caching mechanisms and optimization of the video processing pipeline demonstrates my focus on user experience and system efficiency.`}
          </Typography>

          <Typography variant="body2" paragraph>
            {`Looking ahead, Clipbard represents just the beginning of what's possible in automated content creation. The platform's ability to transform text into engaging visual stories opens up new possibilities for education, training, and digital storytelling. As AI technologies continue to evolve, we're well-positioned to incorporate new capabilities and further enhance the creative possibilities for our users.`}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ClipbardProjectDescription;
