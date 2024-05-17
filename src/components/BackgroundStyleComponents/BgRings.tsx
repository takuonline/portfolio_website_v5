import { alpha, Box } from "@mui/material";

const BgRings = (props: {
  size:
    | number
    | string
    | { md?: number; xs?: number; lg?: number; sm?: number };
  opacity?: number;
}) => {
  const opacity = props.opacity ?? 0.2;

  return (
    <Box
      sx={{
        width: props.size,
        height: props.size,
        position: "relative",
        opacity: opacity,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "2.5%",
          height: "2.5%",
          backgroundColor: "#4B4C49",
          top: "70%",
          left: "3.5%",
          borderRadius: "50%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: `1px solid #4B4C49  `,
        }}
      />
    </Box>
  );
};

export default BgRings;
