import { Typography, Grid, Theme, SxProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const ProjectTextBox = (props: {
  title: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  size?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
}) => {
  const theme = useTheme();
  const size = props.size ?? { xs: 12 };

  return (
    <Grid
      {...size}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        textAlign: "left",
        whiteSpace: "break-spaces",
        ...props.sx,
      }}
    >
      {/* <hr
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: theme.palette.text.primary,
        }}
      /> */}

      <Typography
        variant="body2"
        component="div"
        sx={{
          mb: 5,
        }}
      >
        {props.children}
      </Typography>
    </Grid>
  );
};

export default ProjectTextBox;
