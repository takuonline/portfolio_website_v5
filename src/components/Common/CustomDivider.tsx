import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import BodyWrapper from "./BodyWrapper";
import { Theme, SxProps } from "@mui/material";
import { motion } from "framer-motion";

const CustomDivider = (props: {
  size?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  sx?: SxProps<Theme>;
}) => {
  const theme = useTheme();
  const size = props.size ?? { xs: 12 };

  return (
    <BodyWrapper>
      <Grid {...size} sx={{ display: "relative",
       width: "100%",

        ...props.sx

        }}>
        <motion.hr
          // initial={{
          //   width: "0%",
          // }}
          // whileInView={{
          //   width: "100%",
          // }}
          // transition={{ duration: 0.4 }}
          style={{
            display: "absolute",
            right: 0,
            // width: "9%",
            height: "1px",

            // margin:"0 3rem",
            backgroundColor: theme.palette.text.primary,
          }}
        />
      </Grid>
    </BodyWrapper>
  );
};

export default CustomDivider;
