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
  height?: number;
  maxHeight?: string;
  size?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  sx?: SxProps<Theme>;
  style?: CSSProperties;
  onClick?: () => void;
  showFrame?: boolean;
  frameType?: FrameType;
  // imageProps:ImageProps
}) => {
  const size = props.size ?? { xs: 12 };
  return (
    <Grid
      container
      {...size}
      onClick={props.onClick}
      sx={{
        ...props.sx,
      }}
    >
      <PhoneFrame frameType={props.frameType} showFrame={props.showFrame}>
        <Image
          style={{
            width: "100%",
            height: "auto",
            maxHeight: props.maxHeight ?? "none",
            borderRadius: props.borderRadius ?? 10,
            ...props.style,
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
