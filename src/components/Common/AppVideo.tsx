
import {
  Box,
  Grid,
  Theme,
  SxProps,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import ReactPlayer from "react-player";
import FrameType from "../../common/enums/phone-frame";
import styles from "./../../styles/youtube-video.module.css";
import PhoneFrame from "./PhoneFrame";
import iphoneStyles from "../../styles/iphone-frame.module.css";
import React, { useEffect, useRef, useState } from "react";

type AppVideoType = {
  src: string;
  alt: string;
  aspectRatio?: number;
  size?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  borderRadius?: number | string;
  sx?: SxProps<Theme>;
  showFrame?: boolean;
  frameType?: FrameType;
  height?: number | string;
  frameHeight?: number | string;
};
const defaultProps = {
  frameType: FrameType.IphoneXLocal,
  showFrame: true,
};
const AppVideo = (props: AppVideoType) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  props = { ...defaultProps, ...props };

  const size = props.size ?? { xs: 12 };

  const isLocalframeType = props.frameType == FrameType.IphoneXLocal;
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  // const videoRef = useRef();

  // useEffect(() => {
  //   let options = {
  //     rootMargin: "0px",
  //     threshold: [0.25, 0.75],
  //   };

  //   let handlePlay: IntersectionObserverCallback = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting && videoRef.current !== null) {
  //         videoRef.current.play();
  //       } else {
  //         videoRef.current.pause();
  //       }
  //     });
  //   };

  //   let observer = new IntersectionObserver(handlePlay, options);
  //   const isReady =
  //     videoRef.current !== null && videoRef.current  !== undefined && videoRef.current.player?.isReady;
  //   if (isReady ) {
  //     console.log(videoRef.current);
  //     console.log(typeof videoRef.current);

  //     observer.observe(videoRef.current);
  //   }
  // });

  return (
    <Grid container {...size} sx={{ ...props.sx }}>
      <PhoneFrame
        height={props.frameHeight}
        frameType={props.frameType}
        showFrame={!isLocalframeType && props.showFrame}
      >
        <Box
          className={` ${styles.youtubeContainer}    ${
            !isMobileView &&
            isLocalframeType &&
            props.showFrame &&
            iphoneStyles.iphone_x
          }   `}
          component={"span"}
          sx={{
            borderRadius: props.borderRadius ?? 10,
          }}
        >
          <i></i>
          {/* <b></b>  */}
          {hasWindow && (
            <ReactPlayer
              // controls
              // pip
              // playing={true}
              // ref={videoRef}
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
