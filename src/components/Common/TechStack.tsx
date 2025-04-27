import React from "react";
import { Box } from "@mui/material";
import TechSection from "@/components/Common/TechSection";
import { TechStackProps } from "@/types/techStackTypes";

const TechStack: React.FC<TechStackProps> = ({ sections }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: 2,

        width: "100%",
      }}
    >
      {sections.map((section, index) => (
        <TechSection
          key={`${section.section}-${index}`}
          section={section.section}
          items={section.items}
        />
      ))}
    </Box>
  );
};

export default TechStack;
