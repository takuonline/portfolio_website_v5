import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import BodyWrapper from "../Common/BodyWrapper";
import HighlightTypography from "../Common/HighlightTypography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import DepthEllipse from "../BackgroundStyleComponets/DepthEllipse";
import BgRings from "../BackgroundStyleComponets/BgRings";
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

type CustomListItemType = {
  title: string;
  onClick: () => void;
  idx: number;
  isLast: boolean;
};

const CustomListItem = (props: CustomListItemType) => {
  const [isHover, setIsHover] = React.useState(false);
  const theme = useTheme();

  const transition = `all ${theme.transitions.duration.standard} ease`;

  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{
        pr: 5,
        width: "100%",

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
        disableRipple
        disableTouchRipple
        sx={{
          ml: 2,
          ":hover": {
            color: "black",
            backgroundColor: "background.paper",
          },

          [theme.breakpoints.down("md")]: {
            ml: 0,
          },

          py: 2,
        }}
      >
        {isHover && (
          <Box
            sx={{
              width: 15,
              height: 15,
              borderRadius: "50%",
              backgroundColor: "black",
              mr: 2,
              [theme.breakpoints.down("md")]: {
                ml: 1,
              },
            }}
          />
        )}

        <ListItemButton
          sx={{
            p: 0,
          }}
          disableRipple
          onClick={props.onClick}
        >
          <Typography
            variant="h3"
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

const MyServices = () => {
  const theme = useTheme();
  const isMdUpBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  const services = [
    {
      title: "Data science",
      onClick: () => {},
    },

    {
      title: "Machine learning",
      onClick: () => {},
    },
    {
      title: "Frontend Development",
      onClick: () => {},
    },
    {
      title: "Backend development",
      onClick: () => {},
    },
  ];

  const contactBtnOnClick = function (): void {
    throw new Error("Function not implemented.");
  };

  const contactBtn = (
    <PrimaryBtn
      onClick={contactBtnOnClick}
      title={"CONTACT ME"}
      sx={{
        backgroundColor: "primary.main",
        color: "background.default",
        py: 2,
        my: 8,
        mr: 5,
      }}
    />
  );

  const mobileContactBtn = (
    <PrimaryBtn
      onClick={contactBtnOnClick}
      title={"CONTACT ME"}
      sx={{
        backgroundColor: "primary.main",
        color: "background.default",
        py: 3,
        my: 8,

        width: "100%",
        ":hover": {
          color: "primary.main",
        },
      }}
      showIndicator={true}
      indicatorColor={"background.default"}
    />
  );
  return (
    <>
      <BodyWrapper>
        <Grid
          container
          sx={{
            height: "100%",
            mb: { md: 40, xs: 15 },
          }}
        >
          <Grid
            item
            xs={5}
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              width={"65%"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "s",
              }}
            >
              <Typography
                variant={"h1"}
                // typography={{ xs:"h1"}}
                sx={{
                  ml: 7,
                  [theme.breakpoints.down("md")]: {
                    typography: "h1",

                    ml: 0,
                    mb: 3,
                  },
                }}
              >
                {`My `}
                <br />

                <HighlightTypography
                  sx={{
                    textIndent: "-4rem",
                    [theme.breakpoints.down("md")]: {
                      textIndent: "0rem",
                    },
                  }}
                >
                  {"services"}
                </HighlightTypography>
              </Typography>

              {isMdUpBreakpoint && contactBtn}
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "15%",
                right: "10%",
              }}
            >
              <DepthEllipse size={"556px"} />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "10%",
                left: "-40%",
                transform: "rotate(40deg)",
                zIndex: -1,
                [theme.breakpoints.down("md")]: {
                  left: "160%",

                  top: "-40%",
                },
              }}
            >
              <BgRings size={{ md: 550, xs: 350 }} />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "-20%",
                transform: "rotate(80deg)",
                zIndex: -1,
                [theme.breakpoints.down("md")]: {
                  left: "200%",
                  top: "50%",
                },
              }}
            >
              <BgRings size={{ md: 450, xs: 250 }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <List
              sx={{
                width: "100%",
              }}
            >
              {services.map((v, idx) => (
                <>
                  <CustomListItem
                    title={v.title}
                    onClick={v.onClick}
                    idx={idx}
                    isLast={idx === services.length - 1}
                  />
                </>
              ))}
            </List>
          </Grid>

          {!isMdUpBreakpoint && mobileContactBtn}
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default MyServices;
