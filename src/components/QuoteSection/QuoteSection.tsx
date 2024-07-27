import { merriWeatherFont } from "@/common/themes/fonts/font";
import { alpha, Box, Button, Grid, IconButton, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BodyWrapper from "../Common/BodyWrapper";
import Image from "next/image";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Theme, SxProps, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const TextSVGBackground = (props: {
  color: string | undefined;
  size: number;
  sx?: SxProps<Theme>;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ...props.sx,
      }}
    >
      <Image
        alt={"Star button svg"}
        priority
        src="/static/svg/contact_me_text.svg"
        height={props.size}
        width={props.size}
        color={props.color}
      />
    </Box>
  );
};
const QuoteSection = () => {
  const theme = useTheme();
  // TODO: This is a hack to fix an issue with the use MediaQuery hook
  const initValue = useMediaQuery(theme.breakpoints.up("md"), {
    // noSsr: true,
  });
  const [isMdUpBreakpoint, setIsMdUpBreakpoint] = React.useState(true);

  React.useEffect(() => {
    setIsMdUpBreakpoint(initValue);
  }, [initValue]);

  const bgImageFactor = isMdUpBreakpoint ? 1 : 0.6;
  const blobImageFactor = isMdUpBreakpoint ? 0.35 : 0.2;

  const router = useRouter();
  return (
    <>
      <Paper
        sx={{
          backgroundColor: "primary.main",
          pt: 20,
          position: "relative",
          zIndex: 1,
          overflow: "clip",
          pb: 15,
          borderRadius: 0,
        }}
      >
        <BodyWrapper>
          <Box
            sx={{
              position: "absolute",
              top: "25rem",
              left: "10rem",
              zIndex: -1,

              [theme.breakpoints.down("md")]: {
                position: "absolute",
                left: "-7rem",
                top: "26rem",
              },
            }}
          >
            <Image
              src="/static/images/clay.png"
              alt="black blob complex "
              width={1337 * bgImageFactor}
              height={1104 * bgImageFactor}
              // width={3840 * 0.4}
              // height={2160 * 0.4}
              style={{}}
            />
          </Box>
          <Typography
            variant={"h1"}
            sx={{
              fontFamily: merriWeatherFont.style.fontFamily,
              color: "black",
              width: "80%",
              textIndent: "5%",

              [theme.breakpoints.down("md")]: {
                textIndent: "2rem",
                fontSize: (t) => t.typography.h1.fontSize?.toString(),
                width: "100%",
              },
            }}
          >
            {` l am passionate about
solving hard problems
to drive positive change
in the world.`}
          </Typography>

          <Divider
            sx={{
              backgroundColor: (t) => alpha(t.palette.background.default, 0.2),
              my: 5,
              mt: 10,
            }}
          />

          <Grid
            container
            sx={{
              position: "relative",
              height: "40rem",
            }}
          >
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                // width:"20rem",
                // aspectRatio:2/4,

                [theme.breakpoints.down("md")]: {
                  position: "absolute",

                  top: 430,
                  // left: -320,
                },
              }}
            >
              <Image
                src="/static/images/complex_blob.png"
                alt="complex blob background decoration"
                height={2160 * blobImageFactor}
                width={3840 * blobImageFactor}
                // fill
                style={{
                  position: "absolute",
                  top: isMdUpBreakpoint ? -180 : -140,
                  left: isMdUpBreakpoint ? -320 : -400,
                }}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography
                variant={"body2"}
                sx={{
                  color: "black",
                  mt: 2,
                }}
              >
                {`Building innovative solutions can be a challenging and rewarding process.
            It requires creativity, critical thinking, and a willingness to take
             risks and learn from failures.By following a structured process, such
             as the design thinking process, and gathering feedback from potential
             users or customers, l am able can increase the chances of developing a
              successful and impactful solution`}
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  my: 12,
                  ml: { lg: "0", xs: "50%" },

                  [theme.breakpoints.down("md")]: {
                    mt: 44,
                  },
                }}
              >
                <TextSVGBackground
                  color={theme.palette.background.default}
                  size={160}
                />

                <IconButton
                  onClick={() => router.push("/#contact")}
                  sx={{
                    position: "absolute",
                    backgroundColor: "background.default",
                    borderRadius: "5rem",
                    px: 4,
                    py: 1,
                    top: "33%",
                    color: "primary.main",

                    ":hover": {
                      color: "background.default",
                      border: "1px solid black",
                      borderColor: "background.default",
                    },
                  }}
                >
                  <ArrowDownwardIcon fontSize="large" sx={{}} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </BodyWrapper>
      </Paper>
    </>
  );
};

export default QuoteSection;
