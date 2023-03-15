import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import replaceAll from "../../common/utils/custom-replace-all";
import HighlightTypography from "./HighlightTypography";
import { motion } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

const SectionHeader = (props: { title: string }) => {
  const theme = useTheme();

  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.3 : 1;
  //TODO: .replaceAll(" ","-") not working
  let _id = props.title.trim().toLowerCase().split(" ").join("-");

  return (
    <Typography
      component={motion.div}
      id={replaceAll(_id, " ", "-")}
      variant="h1"
      initial={{ opacity: 0, y:-40 *mobileAnimationFactor}}
      whileInView={{ opacity: 0.8, y:0  }}
      transition={{delay:.7*mobileAnimationFactor, duration: 0.2 }}
      viewport={{ once: true }}
      sx={{
        ml: 0,
        pl: 0,
        textAlign: "left",
        fontSize: "7.6rem",
        fontStyle: "italic",
        opacity: 0.7,

        [theme.breakpoints.down("lg")]: {
          fontSize: "5.4rem",
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "4rem",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "3.75rem",
          fontWeight: 500,
          // textShadow: "4px -4px #0000ff",
        },
      }}
    >
      {props.title.toLowerCase()}
    </Typography>
  );
};

export default SectionHeader;
