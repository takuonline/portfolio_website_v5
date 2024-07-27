import { alpha, Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material";

const DepthEllipse = (props: {
  size:
    | number
    | string
    | {
        lg?: number | string;
        md?: number | string;
        sm?: number | string;
        xs?: number | string;
      };
  blur?: number;
  opacity?: number;
  sx?: SxProps<Theme>;
}) => {
  const blur = props.blur ?? 100;
  const opacity = props.opacity ?? 0.05;
  return (
    <Box
      sx={{
        height: props.size,
        width: props.size,
        borderRadius: "50%",

        filter: `blur(${blur}px)`,
        backgroundColor: (t) => alpha(t.palette.text.primary, opacity),
        ...props.sx,
      }}
    />
  );
};

export default DepthEllipse;
