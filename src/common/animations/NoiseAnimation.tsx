import Box from "@mui/material/Box";
import bgImg from "./../../../public/static/images/noise-fx.png";

import Image from "next/image";

const BGImage = () => {
  return (
    <>
      <Image
        src="/static/images/background_noise_image.png"
        alt="Picture of the author"
        width={500}
        height={500}
        style={{
          backgroundRepeat:"repeat-x",

          position: "fixed",
          width: "500px",
          height: "500px",



        }}
      />
    </>
  );
};

const NoiseAnimation = (props: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        // animation: "noiseAnimationFX 6s steps(10) infinite",
        backgroundImage: `url(${bgImg.src})`,
        backgroundRepeat: "repeat",
        // content: "" ,
        height: "300%",
        left: "-100%",
        opacity: ".05",
        pointerEvents: "none",
        position: "fixed",
        top: "-100%",
        // transition: "opacity .4s ease",
        width: "300%",
        // willChange: "transform",

        zIndex: 1,

        // "@keyframes noiseAnimationFX": {
        //   "0%": {
        //     transform: "translate(20%, -15%)",
        //   },

        //   "10%": {
        //     transform: "translate(-20%, -15%)",
        //   },

        //   "20%": {
        //     transform: "translate(20%, -5%)",
        //   },

        //   "30%": {
        //     transform: "translate(-20%, -5%)",
        //   },

        //   "40%": {
        //     transform: "translate(20%, 5%)",
        //   },

        //   "50%": {
        //     transform: "translate(-20%, 5%)",
        //   },

        //   "60%": {
        //     transform: "translate(20%, 15%)",
        //   },

        //   "70%": {
        //     transform: "translate(-20%, 15%)",
        //   },

        //   "80%": {
        //     transform: "translate(20%, 5%)",
        //   },

        //   "90%": {
        //     transform: "translate(-20%, 5%)",
        //   },

        //   "100%": {
        //     transform: "translate(20%, -5%)",
        //   },
        // },
      }}
    >
      {props.children}
    </Box>
  );
};
export default BGImage;
