import { alpha, Box, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const ContactItem = (props: { title: string; href: string }) => {
  const theme = useTheme();
  const transition = `all ${theme.transitions.duration.standard} ease`;

  return (

    <Box sx={{

      [theme.breakpoints.down("lg")]: {
        mr:10

      },
    }}>

    <Button
      variant="text"
      href={props.href}
      LinkComponent={Link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        borderRadius: "0",
        p: 0,
        textTransform: "none",
        transition: transition,
        posiiton: "relative",

        span: {
          display: "none",
        },
        pb: 1,
        borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.2)}`,

        ":hover": {
          transition: transition,
          // backgroundColor: theme.palette.background.default,
          color: "primary.main",
          borderColor: theme.palette.secondary.main,
          backgroundColor: "transparent",
        },

        [theme.breakpoints.down("lg")]: {
          // mr: 10,
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.text.primary,

          ":hover": {
            transition: transition,
            backgroundColor: "transparent",
            color: "primary.main",
          },

          [theme.breakpoints.down("md")]: {
            typography: "h2",

          },
        }}
      >
        <ArrowOutwardIcon
          sx={{
            position: "absolute",
            top: "0%",
            right: "-20%",
            color: "primary.main",
            [theme.breakpoints.down("md")]: {
              right: "-26%",
              // position: "relative",


            },
          }}
        />

        {props.title}
      </Typography>

      {/* <ArrowOutwardIcon
        sx={{
          display: "none",

          [theme.breakpoints.down("md")]: {
            typography: "h1",
            right: "-26%",
             width:"100%",
            display: "inline-flex",
            color: "primary.main",


            // position: "relative",
          },
        }}
      /> */}
    </Button>
    </Box>

  );
};
export default ContactItem;
