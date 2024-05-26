"use client";
import { Theme, SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useTheme } from "@mui/material/styles";

const BodyWrapper = (props: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mx: 9,
        [theme.breakpoints.down("lg")]: {
          mx: 5,
        },
        [theme.breakpoints.down("sm")]: {
          mx: 2,
        },
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default BodyWrapper;
