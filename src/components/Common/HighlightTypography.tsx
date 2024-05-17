import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { merriWeatherFont } from "@/common/themes/fonts/font";
import { Theme, SxProps } from "@mui/material";

const HighlightTypography = (props: {
  children: React.ReactNode;
  backgroundSize?: string;
  backgroundPosition?: string;
  sx?: SxProps<Theme>;
}) => {
  const theme = useTheme();
  return (
    <Box
      component="span"
      sx={{
        fontFamily: merriWeatherFont.style.fontFamily,
        display: "inline-block",
        color: "primary.main",
        fontStyle: "italic",
        ...props.sx,
        // backgroundImage: "linear-gradient(#0045FF, #0045FF)",
        // backgroundPosition: { xs:  props.backgroundPosition ?? "50% 90%" },
        // backgroundRepeat: "no-repeat",
        // backgroundSize: { xs:props.backgroundSize ?? "auto 40%" },
      }}
    >
      {props.children}
    </Box>
  );
};

export default HighlightTypography;
