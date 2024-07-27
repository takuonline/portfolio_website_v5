import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppImage from "../Common/AppImage";
import Chip from "@mui/material/Chip";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import React from "react";
import { alpha, useTheme } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import NoiseAnimation, {
  NoiseAnimationWrapper,
} from "@/common/animations/NoiseAnimation";
import DepthEllipse from "../BackgroundStyleComponents/DepthEllipse";
const Title = (props: { title: string }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        ml: 7,
        mt: 7,
        top: "1.5rem",
        left: "0",

        [theme.breakpoints.down("md")]: {
          ml: 0,
          width: "90%",
          top: "0rem",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: 20,
          height: 20,
          borderRadius: "50%",
          mx: 3.5,
        }}
      />

      <Typography
        sx={{
          fontSize: (t) => ({
            lg: t.typography.h3.fontSize?.toString(),
            xs: t.typography.h4.fontSize?.toString(),
          }),
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

type ProjectComponentType = {
  title: string;
  skills: string[];
  bgImage: React.ReactNode | string;
  children: React.ReactNode;
};

const ProjectComponent = (props: ProjectComponentType) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const theme = useTheme();

  const borderRadius = 23;
  const borderRadiusMdDown = 15;

  const btn = (
    <PrimaryBtn
      icon1={
        isExpanded ? (
          <RemoveCircleIcon
            sx={{
              mx: 1,
            }}
          />
        ) : (
          <AddCircleIcon
            sx={{
              mx: 1,
            }}
          />
        )
      }
      onClick={() => setIsExpanded((v) => !v)}
      title={isExpanded ? "collapse" : "Expand"}
      sx={{
        ml: "auto",
        backgroundColor: "primary.main",
        color: "background.default",
        py: 2,
        ":hover": {
          color: "primary.main",
        },

        [theme.breakpoints.down("md")]: {
          borderRadius: 15,
          ml: 0,
          width: "80%",
          py: 3,
          position: "absolute",
        },
      }}
    />
  );

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        border: isExpanded
          ? (t) => `2px solid ${alpha(t.palette.common.white, 0.2)}`
          : `2px solid transparent`,
        borderRadius: borderRadius,
        mt: 10,
        [theme.breakpoints.down("md")]: {
          borderRadius: borderRadiusMdDown,
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "45rem",
            lg: "43rem",
          },

          width: "100%",
          overflow: "hidden",
          borderRadius: borderRadius,

          backgroundColor: "black",

          [theme.breakpoints.down("md")]: {
            borderRadius: borderRadiusMdDown,
            height: "40rem",
          },
        }}
      >
        {props.bgImage}
      </Box>

      <Title title={props.title} />

      <Box
        sx={{
          position: "absolute",
          top: {
            lg: "36rem",
          },

          left: "5rem",
          display: "flex",
          flexWrap: "wrap",
          width: "88%",
          justifyContent: "space-between",

          [theme.breakpoints.down("md")]: {
            width: "100%",
            mr: 0,
            left: "0rem",
            justifyContent: "center",
            top: "33rem",
          },
        }}
      >
        <Box
          sx={{
            mr: "auto",
            width: "40%",

            [theme.breakpoints.down("md")]: {
              width: "100%",
              mr: 0,
              ml: 5,
              position: "absolute",
              top: "-24rem",
            },
          }}
        >
          {props.skills.map((v, idx) => (
            <Chip
              key={idx}
              variant={"outlined"}
              label={v}
              sx={{
                borderColor: "text.primary",
                m: { lg: 1, xs: 0.5 },
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            />
          ))}
        </Box>

        {btn}
      </Box>

      {isExpanded && props.children}
      {isExpanded && (
        <Box
          sx={{
            position: "absolute",
            bottom: "5rem",
            right: "5rem",
            zIndex: 5,

            [theme.breakpoints.down("md")]: {
              width: "100%",
              position: "absolute",
              right: "-2rem",
            },
          }}
        >
          {btn}
        </Box>
      )}
    </Box>
  );
};

export default ProjectComponent;
