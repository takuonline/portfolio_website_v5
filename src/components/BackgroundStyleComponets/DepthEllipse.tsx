import { Box } from "@mui/material";

const DepthEllipse = (props: { size: number | string }) => {
  return (
    <Box
      sx={{
        height: props.size,
        width: props.size,
        borderRadius: "50%",
        opacity: 0.4,
        filter: "blur(200px)",
        backgroundColor: "text.primary"
      }}
    />
  );
};

export default DepthEllipse;
