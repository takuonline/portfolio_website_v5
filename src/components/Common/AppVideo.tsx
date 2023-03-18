import {
  Box,
  Grid,
  Typography,
  Theme,
  SxProps,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import FrameType from "../../common/enums/phone-frame";
import styles from "./../../styles/youtube-video.module.css";
import PhoneFrame from "./PhoneFrame";

const AppVideo = (props: {
  src: string;
  alt: string;
  aspectRatio?: number;
  size?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  borderRadius?: number | string;
  sx?: SxProps<Theme>;
  showFrame?: boolean;
  frameType?: FrameType;
}) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const size = props.size ?? { xs: 12 };
  return (
    <Grid container {...size} sx={{ ...props.sx }}>
      <PhoneFrame frameType={props.frameType} showFrame={props.showFrame}>
        <Box
          className={styles.youtubeContainer}
          component={"span"}
          sx={{
            borderRadius: props.borderRadius ?? 0,
          }}
        >
          {hasWindow && (
            <ReactPlayer
              // ref={props.ref}
              // controls
              // pip

              muted
              loop
              style={{ aspectRatio: props.aspectRatio ?? 14 / 25 }}
              height="auto"
              width="auto"
              url={props.src}
            />
          )}
        </Box>
      </PhoneFrame>
    </Grid>
  );
};

export default AppVideo;
