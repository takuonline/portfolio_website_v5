import { Box, Typography,  } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const ProjectTitleHeader = (props: { title: string; index?: number }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        mt:{xs:20,lg:30}
      }}
    >
      <Typography
        variant="h1"
        sx={{
          mb: 5,
          zIndex: -1,
          position: "absolute",
          opacity: 0.05,
          left: "-2%",
          top: "-100%",

          [theme.breakpoints.down("sm")]: {
            top: "-45%",
            left: "-5%",
            transform: "translate(-5%, -45%)",
          },
        }}
      >
        {`0${props.index ?? 0}`}
      </Typography>

      <Typography
        variant="h3"
        sx={{
          mb: 5,
          zIndex: 1,
          // position: "absolute",
          [theme.breakpoints.down("md")]: {
            fontSize: "2.37rem",
          },
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

export default ProjectTitleHeader;
