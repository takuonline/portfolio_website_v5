import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import { alpha, Divider, useMediaQuery, useTheme } from "@mui/material";

type GridComponentSize = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
};
type ProjectWrapperType = {
  firstComponent: React.ReactNode;
  firstComponentScale: GridComponentSize;
  secondComponent: React.ReactNode;
  secondComponentScale: GridComponentSize;
  showDivider?: boolean;
};

const ProjectSectionWrapper = (props: ProjectWrapperType) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const mobileAnimationFactor = isMobileView ? 0.5 : 1;
  const showDivider = props.showDivider ?? true;
  return (
    <>
      <Grid
        container
        sx={{
          mx: { lg: 15, xs: 2 },
          width: { lg: "100%", xs: "90%" },
          my: { lg: 7, xs: 7 },
        }}
        columnGap={5}
        // rowGap={20}
        rowGap={{ xs: 4 }}
        xs={12}
      >
        <Grid
          item
          xs={12}
          {...props.firstComponentScale}
          component={motion.div}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2 * mobileAnimationFactor,
            duration: 0.2 * mobileAnimationFactor,
          }}
          viewport={{ once: true }}
        >
          {props.firstComponent}
        </Grid>

        <Grid
          xs={12}
          {...props.secondComponentScale}
          item
          columnGap={{ xs: 5, md: 0 }}
          component={motion.div}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3 * mobileAnimationFactor,
            duration: 0.3 * mobileAnimationFactor,
          }}
          viewport={{ once: true }}
        >
          {props.secondComponent}
        </Grid>
      </Grid>
      {showDivider && (
        <Divider
          sx={{
            width: "88%",
            mx: "auto",
          }}
        />
      )}
    </>
  );
};

export default ProjectSectionWrapper;
