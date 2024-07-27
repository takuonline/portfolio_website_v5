import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import replaceAll from "../../common/utils/custom-replace-all";
import HighlightTypography from "./HighlightTypography";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, SxProps } from "@mui/material";

const SectionHeader = (props: {
  children: React.ReactNode | string;
  sx?: SxProps<Theme>;
  id: string;
}) => {
  const theme = useTheme();

  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.3 : 1;
  //TODO: .replaceAll(" ","-") not working.
  // TODO: Fix _id
  let _id = props.id.trim().toLowerCase().split(" ").join("-");

  return (
    <Typography
      component={motion.div}
      id={replaceAll(_id, " ", "-")}
      variant="h1"
      initial={{ opacity: 0, y: -40 * mobileAnimationFactor }}
      whileInView={{ opacity: 0.8, y: 0 }}
      transition={{ delay: 0.7 * mobileAnimationFactor, duration: 0.2 }}
      viewport={{ once: true }}
      sx={{
        ml: 0,
        pl: 0,
        textAlign: "left",

        opacity: 0.7,

        ...props.sx,

        [theme.breakpoints.down("md")]: {
          typography: "h1",
        },
      }}
    >
      {props.children}
    </Typography>
  );
};

export default SectionHeader;
