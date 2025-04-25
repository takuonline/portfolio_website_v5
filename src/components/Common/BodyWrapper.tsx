"use client";
import { Theme, SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useTheme } from "@mui/material/styles";

// Define props type including children and sx
interface BodyWrapperProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

// Use React.forwardRef to allow passing refs
const BodyWrapper = React.forwardRef<HTMLDivElement, BodyWrapperProps>(
  (props, ref) => {
    const theme = useTheme();
    return (
      <Box
        // Pass the ref to the underlying Box component
        ref={ref}
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
  },
);

// Add display name for better debugging
BodyWrapper.displayName = "BodyWrapper";

export default BodyWrapper;
