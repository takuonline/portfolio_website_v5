import { alpha, Box } from "@mui/material";

const BgRings = (props: { size: number }) => {
  return (
    <Box
      sx={{
        width: props.size,
        height: props.size,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "5%",
          height:  "5%",
          backgroundColor:  "#4B4C49",
          top: "70%",
          left: "3%",
          borderRadius: "50%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border:   `1px solid #4B4C49  `,
        }}
      />
    </Box>
  );
};

export default BgRings;
