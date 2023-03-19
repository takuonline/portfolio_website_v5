import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import BodyWrapper from "../Common/BodyWrapper";
import HighlightTypography from "../Common/HighlightTypography";
import DepthEllipse from "./DepthEllipse";

const BgQuotes = (props: { iconSize: number }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          mt: 25,
          [theme.breakpoints.down("md")]: {
            mt: 70,
          },
        }}
      >
        <BodyWrapper>
          <Image
            alt={"Star button svg"}
            priority
            src="/static/svg/quotes.svg"
            height={props.iconSize}
            width={props.iconSize}
            color={"red"}
          />

          <Typography
            variant="h4"
            sx={{
              width: "43%",
              position: "absolute",
              top: "50%",
              ml: 2,
              // textIndent: "1em",

              [theme.breakpoints.down("md")]: {
                width: "100%",
                ml: 0,
              },
            }}
          >
            {` You can’t connect the dots looking
forward, you can only connect them
looking backwards. `}
            <HighlightTypography>{`So you have to trust `}</HighlightTypography>
            {` that the dots will somehow
 connect in your future.`}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              top: "200%",
              left: "40%",
              opacity: 0.5,

              [theme.breakpoints.down("md")]: {
                right: "5%",
                top: "330%",
                left: "auto",
              },
            }}
          >
            {"- Steve Jobs"}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              top: "235%",
              // left: "40%",
              opacity: 0.5,
              // width: "35%",
              whiteSpace: "break-spaces",
              ml: 35,
              mt: 2,

              [theme.breakpoints.down("md")]: {
                top: "360%",
                whiteSpace: "normal",
                ml: 0,
              },
            }}
          >
            {`It can be hard to trust in the process when you can’t
see the bigger picture. But you never know what
might be around the corner, so you have to keep
moving forward. And one day, you may recognize that
some of the hardest things you had to go through were
also the best things that ever happened to you.`}
          </Typography>
        </BodyWrapper>

        <Box
          sx={{
            position: "absolute",
            top: "120%",
            right: "6%",
            [theme.breakpoints.down("md")]: {
              top: "-220%",
            },
          }}
        >
          <DepthEllipse size={"356px"} />
        </Box>
      </Box>
    </>
  );
};

export default BgQuotes;
