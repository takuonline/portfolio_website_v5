import Box from "@mui/material/Box";
import bgImg2 from "./../../../public/static/images/background_noise_image.png";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export const NoiseAnimationWrapper = (props: {
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        transition: "opacity .4s ease",
        backgroundImage: `url(${bgImg2.src})  `,
        backgroundRepeat: "repeat",
        // height: "300%",
        // left: "-100%",
        pointerEvents: "none",
        // position: "fixed",
        // top: "-100%",
        // width: "300%",
        willChange: "transform",

        "@keyframes noiseAnimationFX": {
          "0%": {
            transform: "translate(20%, -15%)",
          },

          "10%": {
            transform: "translate(-20%, -15%)",
          },

          "20%": {
            transform: "translate(20%, -5%)",
          },

          "30%": {
            transform: "translate(-20%, -5%)",
          },

          "40%": {
            transform: "translate(20%, 5%)",
          },

          "50%": {
            transform: "translate(-20%, 5%)",
          },

          "60%": {
            transform: "translate(20%, 15%)",
          },

          "70%": {
            transform: "translate(-20%, 15%)",
          },

          "80%": {
            transform: "translate(20%, 5%)",
          },

          "90%": {
            transform: "translate(-20%, 5%)",
          },

          "100%": {
            transform: "translate(20%, -5%)",
          },
        },

        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};
const NoiseAnimation = () => {
  return (
    <Box
      sx={{
        //  animation: "noiseAnimationFX 6s steps(10) infinite",
        transition: "opacity .4s ease",
        backgroundImage: `url(${bgImg2.src})  `,
        backgroundRepeat: "repeat",
        height: "300%",
        left: "-100%",
        pointerEvents: "none",
        position: "fixed",
        top: "-100%",
        width: "300%",
        willChange: "transform",
        "@keyframes noiseAnimationFX": {
          "0%": {
            transform: "translate(20%, -15%)",
          },

          "10%": {
            transform: "translate(-20%, -15%)",
          },

          "20%": {
            transform: "translate(20%, -5%)",
          },

          "30%": {
            transform: "translate(-20%, -5%)",
          },

          "40%": {
            transform: "translate(20%, 5%)",
          },

          "50%": {
            transform: "translate(-20%, 5%)",
          },

          "60%": {
            transform: "translate(20%, 15%)",
          },

          "70%": {
            transform: "translate(-20%, 15%)",
          },

          "80%": {
            transform: "translate(20%, 5%)",
          },

          "90%": {
            transform: "translate(-20%, 5%)",
          },

          "100%": {
            transform: "translate(20%, -5%)",
          },
        },
      }}
    />
  );
};
export default NoiseAnimation;
