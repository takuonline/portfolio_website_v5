// components/TechStack/TechSection.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import TechItem from "./TechItem";
import { TechSectionProps } from "@/types/techStackTypes";
const TechSection: React.FC<TechSectionProps> = ({ section, items }) => {
  return (
    <Box
      sx={{
        mb: 4,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          mb: 2,
          fontSize: "14px",
          opacity: 0.5,
          fontWeight: "normal",
        }}
      >
        {section}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1.5,
          pl: 1,
        }}
      >
        {items.map((item, index) => (
          <TechItem key={`${item.type}-${index}`} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default TechSection;
