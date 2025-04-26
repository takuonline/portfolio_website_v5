// components/TechStack/TechItem.tsx
import React from "react";
import { Box, Chip, Typography, useTheme } from "@mui/material";
import { getTechIcon } from "@/components/Common/iconMapping";
import { getCustomIcon } from "@/components/Common/customIconMapping";
import { ExtendedTechItemType } from "@/components/Common/customIconMapping";
import { TechItemType } from "@/types/techStackTypes";

interface TechItemProps {
  item: TechItemType | ExtendedTechItemType;
}

const TechItem: React.FC<TechItemProps> = ({ item }) => {
  // Determine icon to display
  const renderIcon = () => {
    const customItem = item as ExtendedTechItemType;
    if (customItem.customIcon) {
      return getCustomIcon(customItem.customIcon, { sx: { fontSize: 24 } });
    }
    return getTechIcon(item.type as any);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,

        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "80px",
        px: 2,
        py: 0.6,
      }}
    >
      <Chip
        icon={
          <Box sx={{ display: "flex", alignItems: "center", ml: 0.5 }}>
            {renderIcon()}
          </Box>
        }
        label={item.type}
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",

          fontSize: "14px",
          "& .MuiChip-icon": {
            color: "white",
          },
          "& .MuiChip-label": {
            paddingLeft: 2.5,
          },
        }}
      />

      {item.description && (
        <Typography
          sx={{
            display: "flex",

            ml: 0.5,
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "12px",
          }}
        >
          {item.description}
        </Typography>
      )}
    </Box>
  );
};

export default TechItem;
