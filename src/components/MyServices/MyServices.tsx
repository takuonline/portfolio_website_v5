import Grid from "@mui/material/Grid";

import List from "@mui/material/List";

import Typography from "@mui/material/Typography";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import BodyWrapper from "../Common/BodyWrapper";
import HighlightTypography from "../Common/HighlightTypography";

import Box from "@mui/material/Box";
import DepthEllipse from "../BackgroundStyleComponets/DepthEllipse";
import BgRings from "../BackgroundStyleComponets/BgRings";

import { useMediaQuery, useTheme } from "@mui/material";
import { CustomListItem } from "../Common/CustomListItem";
import { useRouter } from "next/navigation";
import React from "react";
import SectionHeader from "../Common/SectionHeader";

const MyServices = () => {
  const theme = useTheme();

  // TODO: This isa hack to fix an issue with the use MediaQuery hook
  const initValue = useMediaQuery(theme.breakpoints.up("md"), {
    // noSsr: true,
  });
  const [isMdUpBreakpoint, setIsMdUpBreakpoint] = React.useState(true);

  React.useEffect(() => {
    setIsMdUpBreakpoint(initValue);
  }, [useMediaQuery(theme.breakpoints.up("md"))]);

  const router = useRouter();
  const handleClick = () => {
    router.push("/#contact");
  };
  const services = [
    {
      title: "Data science",
      onClick: handleClick,
    },

    {
      title: "Machine learning",
      onClick: handleClick,
    },
    {
      title: "Frontend Development",
      onClick: handleClick,
    },
    {
      title: "Backend development",
      onClick: handleClick,
    },
  ];

  const contactBtnOnClick = handleClick;

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
            xs={12}
            md={4}
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              width={"70%"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

                [theme.breakpoints.down("md")]: {
                  ml: -6,
                  mb:3
                },
              }}
            >
              <SectionHeader
                id="my-services"
                sx={{
                  ml: 6,
                }}
              >
                {`My `}
                <br />

                <HighlightTypography
                  sx={{
                    textIndent: "-3rem",
                    [theme.breakpoints.down("md")]: {
                      textIndent: "0rem",
                    },
                  }}
                >
                  {"services"}
                </HighlightTypography>
              </SectionHeader>

              <PrimaryBtn
                onClick={handleClick}
                title={"CONTACT ME"}
                sx={{
                  backgroundColor: "primary.main",
                  color: "background.default",
                  py: 2,
                  my: 8,

                  display: isMdUpBreakpoint ? "inherit" : "None",
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "15%",
                right: "10%",
                [theme.breakpoints.down("md")]: {
                  left: "-50%",
                  top: "-90%",
                },
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
                  left: "60%",
                  top: "20%",
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
                  left: "60%",
                  top: "120%",
                },
              }}
            >
              <BgRings size={{ md: 450, xs: 250 }} />
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
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

          <PrimaryBtn
            onClick={contactBtnOnClick}
            title={"CONTACT ME"}
            sx={{
              backgroundColor: "primary.main",
              color: "background.default",
              py: 3,
              my: 8,

              width: "100%",
              display: isMdUpBreakpoint ? "None" : "flex",

              ":hover": {
                color: "primary.main",
              },
            }}
            showIndicator={true}
            indicatorColor={"background.default"}
          />
        </Grid>
      </BodyWrapper>
    </>
  );
};

export default MyServices;
