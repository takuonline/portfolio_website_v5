import { Grid, Theme, SxProps } from "@mui/material";
import Image from "next/image";
import { CSSProperties } from "react";
import FrameType from "../../common/enums/phone-frame";
import PhoneFrame from "./PhoneFrame";

const AppImage = (props: {
  src: string;
  alt: string;
  borderRadius?: number | string;
  width?: number;
  frameHeight?: number | string;
  maxHeight?: string;
  size?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  sx?: SxProps<Theme>;
  style?: CSSProperties;
  onClick?: () => void;
  showFrame?: boolean;
  frameType?: FrameType;
  height?: number;
  // imageProps:ImageProps
}) => {
  const size = props.size ?? { xs: 12 };
  return (
    <Grid
      // className={iphoneStyles.iphone_x}
      container
      {...size}
      onClick={props.onClick}
      sx={{
        ...props.sx,
      }}
    >
      <PhoneFrame
        height={props.frameHeight}
        frameType={props.frameType}
        showFrame={props.showFrame}
      >
        <i></i>
        {/* <b></b> */}
        <Image
          style={{
            width: "100%",
            height: "auto",
            maxHeight: props.maxHeight ?? "none",
            borderRadius: props.borderRadius ?? 40,
            ...props.style,

            // margin:10,
          }}
          src={props.src}
          alt={props.alt}
          width={props.width ?? 500}
          height={props.height ?? 800}
          // {...imageProps}
        />
      </PhoneFrame>
    </Grid>
  );
};

export default AppImage;
