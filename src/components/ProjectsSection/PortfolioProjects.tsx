import {
  alpha,
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BodyWrapper from "../Common/BodyWrapper";
import SectionHeader from "../Common/SectionHeader";
import BlackFridayPlotlyDashboard from "./WebDashboard/WebDashboard";
import GoogleLensClone from "./GoogleLensClone/GoogleLensClone";
import MobileEcommerceApp from "./MobileEcommerceApp/MobileEcommerceApp";
import ReflectlyClone from "./ReflectlyClone/ReflectlyClone";
import SavvyShopper from "./SavvyShopper/SavvyShopper";
import HighlightTypography from "../Common/HighlightTypography";
import { motion } from "framer-motion";
import DepthEllipse from "../BackgroundStyleComponets/DepthEllipse";
import BgRings from "../BackgroundStyleComponets/BgRings";
import { BgLightStar2 } from "../BackgroundStyleComponets/BgStars";

const InstructionText = (props: {
  title: string;
  color: string;
  opacity: number;
}) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const delayFactor = isMobileView ? 0.3 : 1;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        opacity: props.opacity,
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, width: 0 }}
        transition={{ delay: 1 * delayFactor, duration: 0.2 }}
        whileInView={{
          opacity: 1,

          width: 180,
          border: `1px solid ${alpha(props.color, 0.2)}`,

          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
        viewport={{ once: true }}
      />

      <Typography
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 * delayFactor, duration: 0.3 }}
        viewport={{ once: true }}
        variant="body2"
        sx={{
          color: (t) => alpha(props.color, 0.5),
          fontStyle: "italic",
          display: "flex",
          justifyContent: "end",
          flexDirection: "column",
          paddingLeft: { sm: 2, xs: 0.5 },
          ml: 1,
        }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};

const Title = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        // flexDirection: "column",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "space-between",
          rowGap: 7,
          alignItems: "stretch",
        },
      }}
    >
      <Box />
      <SectionHeader
        id="my-work"
        sx={{
          display: "inline-block",
        }}
      >
        {`My `}
        <HighlightTypography>{"work"}</HighlightTypography>
      </SectionHeader>

      <InstructionText
        title="12+ projects"
        color={theme.palette.common.white}
        opacity={0.5}
      />
    </Box>
  );
};

const BgStyling = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: "-14rem",
          top: "-12rem",
          [theme.breakpoints.down("md")]: {
            top: "-20rem",
            left: "-10rem",
          },
        }}
      >
        <DepthEllipse size={"556px"} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: "-14rem",
          bottom: "10rem",
          zIndex: -2,
        }}
      >
        <DepthEllipse size={"556px"} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "155rem",
          left: "-8rem",
        }}
      >
        <BgLightStar2 size={240} color={undefined} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "7rem",
          right: "-20rem",
        }}
      >
        <BgRings size={{ md: 570, xs: 300 }} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "33rem",
          right: "-10rem",
          transform: "rotate(80deg)",
          [theme.breakpoints.down("md")]: {
            top: "9rem",
            right: "-10rem",
          },
        }}
      >
        <BgRings size={250} />
      </Box>
    </>
  );
};

const PortfolioProjects = () => {
  const theme = useTheme();

  return (
    <>
      <BodyWrapper>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 23,
            mb: 15,
            height: "100%",
            [theme.breakpoints.down("md")]: {
              mt: 12,
            },
          }}
        >
          <Title />
        </Box>
      </BodyWrapper>

      <Box
        sx={{
          position: "relative",
          zIndex: 3,
        }}
      >
        <BgStyling />

        <SavvyShopper index={1} />

        <GoogleLensClone index={2} />
        <MobileEcommerceApp index={3} />
        <BlackFridayPlotlyDashboard index={4} />
        <ReflectlyClone index={5} />

        {/* <BodyWrapper>
  <TextDivider
    text={
      "l am passionate about solving hard problems to drive positive change in the world."
    }
  >
    {`Building innovative solutions can be a challenging and
rewarding process. It requires creativity, critical thinking,
and a willingness to take risks and learn from failures.`}
    <br />
    {`
By following a `}

    <HighlightTypography>{`structured process,`}</HighlightTypography>

    {` such as the design
thinking process, and gathering feedback from potential
users or customers, `}
    {`l am able can increase the chances of
developing a successful and impactful solution`}
  </TextDivider>
</BodyWrapper> */}
      </Box>

      <Box my={30} />
    </>
  );
};

export default PortfolioProjects;
