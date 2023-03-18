import { merriWeatherFont } from "@/common/themes/fonts/font";
import { alpha, Box, Button, Grid, IconButton, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BodyWrapper from "../Common/BodyWrapper";
import Image from "next/image";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Theme, SxProps, useMediaQuery } from "@mui/material";

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
  const isMdUpBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
  const imageFactor = isMdUpBreakpoint ? 1 : 0.6;
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
          borderRadius:0
        }}
      >
        <BodyWrapper>
          <Box
            sx={{
              [theme.breakpoints.down("md")]: {
                position: "absolute",
                left: "-2rem",
                top:"20rem"
              },
            }}
          >
          <Image
            src="/static/images/clay.png"
            alt="black blob complex "
            width={1337 * imageFactor}
            height={1104 * imageFactor}
            // width={3840 * 0.4}
            // height={2160 * 0.4}
            style={{
              position: "absolute",
              zIndex: -1,
              top: "15%",
              left: "10%",
            }}
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
            }}
          >
            <Grid item xs={12} md={7}></Grid>
            <Grid item xs={12} md={5}>
              <Typography
                variant={"body2"}
                sx={{
                  color: "black",
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
                }}
              >
                <TextSVGBackground
                  color={theme.palette.background.default}
                  size={160}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    backgroundColor: "background.default",
                    borderRadius: "5rem",
                    px: 4,
                    py: 1,
                    top: "33%",
                    ":hover": {
                      // color:   "background.default",
                      // backgroundColor: "red",
                    },
                  }}
                >
                  <ArrowDownwardIcon
                    fontSize="large"
                    sx={{
                      color: "primary.main",
                    }}
                  />
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
