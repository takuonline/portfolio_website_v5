import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";

import React from "react";
import { useTheme } from "@mui/material";

type CustomListItemType = {
  title: string;
  onClick: () => void;
  idx: number;
  isLast: boolean;
};

const CustomListItem = (props: CustomListItemType) => {
  const [isHover, setIsHover] = React.useState(false);
  const theme = useTheme();

  const transition = `all .15s ease`;

  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      // onMouseOver = {() => setIsHover(true)}
      // onMouseOut={() => setIsHover(false)}

      sx={{
        pr: 5,
        width: "100%",
        transition: transition,

        ":hover": {
          color: "black",
          backgroundColor: "background.paper",
          cursor: "pointer",
        },
        [theme.breakpoints.down("md")]: {
          pr: 1,
        },
      }}
    >
      <ListItem
        disablePadding
        // disableRipple
        // disableTouchRipple
        sx={{
          ml: 2,
          transition: transition,
          ":hover": {
            color: "black",
            // backgroundColor: "background.paper",
          },

          [theme.breakpoints.down("md")]: {
            ml: 0,
          },

          py: 2,
        }}
      >
        <Box
          sx={{
            width: 15,
            height: 15,
            borderRadius: "50%",
            backgroundColor: "black",
            mr: 2,
            visibility: isHover ? "visible" : "hidden",
            opacity: isHover ? 1 : 0,
            display: isHover ? "flex" : "none",
            transition: transition,

            [theme.breakpoints.down("md")]: {
              ml: 1,
              transition: transition,
            },
          }}
        />

        <ListItemButton
          sx={{
            p: 0,
          }}
          disableRipple
          onClick={props.onClick}
        >
          <Typography
            variant="h3"
            component={"span"}
            sx={{
              [theme.breakpoints.down("md")]: {
                typography: "h2",
                fontWeight: 500,
              },
            }}
          >
            {props.title}
          </Typography>
          <Typography
            component={"span"}
            sx={{
              verticalAlign: "super",

              position: "relative",
              top: " -1.2em",
              fontSize: "80%",
              opacity: 0.5,
              ml: 2.5,
              fontStyle: "italic",

              [theme.breakpoints.down("md")]: {
                // ml:0,
                // left:"-1rem"
              },
            }}
            variant="body2"
          >
            {(props.idx + 1).toString().padStart(2, "0")}
          </Typography>

          <IconButton
            aria-label="comment"
            sx={{
              p: 0,
              ml: "auto",
            }}
          >
            <ArrowForwardIcon
              sx={{
                p: 0,
                textAlign: "right",

                color: isHover ? "black" : "None",
              }}
              color={"primary"}
              fontSize={"large"}
            />
          </IconButton>
        </ListItemButton>
      </ListItem>

      {!props.isLast && !isHover && (
        <Divider
          sx={{
            ml: 3,
            width: "100%",

            [theme.breakpoints.down("md")]: {
              ml: 0,
            },
          }}
        />
      )}
    </Box>
  );
};

export { CustomListItem };
export type { CustomListItemType };
