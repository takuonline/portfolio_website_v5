import { Box, Button, useTheme, Theme, SxProps, alpha } from "@mui/material";
import Image from "next/image";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LookAtMyServiceText from "@/common/svgComponents/LookAtMyServiceText";
import PrimaryColorStar from "@/common/svgComponents/PrimaryColorStar";

const StarSVGBackground = (props: {
  color: string | undefined;
  size: number;
}) => {
  const theme = useTheme();
  return (
    <div>
      <Image
        alt={"Star button svg"}
        priority
        src="/static/svg/star.svg"
        height={props.size}
        width={props.size}
        color={"red"}
        style={{
          color: "red",
        }}
      />
    </div>
  );
};

const TextSVGBackground = (props: {
  color: string | undefined;
  size: number;
}) => {
  const theme = useTheme();
  return (
    <div>
      <Image
        alt={"Star button svg"}
        priority
        src="/static/svg/look_at_my_service_text.svg"
        height={props.size}
        width={props.size}
        color={props.color}
      />
    </div>
  );
};
const StarButton = (props: {
  onClick: () => void;
  sx?: SxProps<Theme>;
  type?: "button" | "reset" | "submit" | undefined;
  //   title: string;
  backgroundColor: string | undefined;
  bgStarSize: number;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
      }}
    >
      <StarSVGBackground
        color={props.backgroundColor}
        size={props.bgStarSize}
      />
      {/* <PrimaryColorStar
       viewBox="0 0 200 300"   scaleFactor={2.5}/> */}

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",

        }}
      >
        {/* <LookAtMyServiceText   scaleFactor={2} viewBox="0 0 200 200"/> */}

        <TextSVGBackground
          color={props.backgroundColor}
          size={props.bgStarSize * 0.77}
        />
      </Box>

      <Button
        variant="outlined"
        type={props.type}
        onClick={props.onClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: 2,
          transform: "translate(-50%,-50%)",
          borderRadius: "20rem",
          px: 3,
          py: 1,
          textTransform: "unset !important",
          backgroundColor: "background.default",
          border: "None",
          ":hover,  :active , :focus": {
            borderColor: (t) => alpha(t.palette.background.default, 1),
            color: (t) => t.palette.background.default,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowDownwardIcon
            sx={{
              fontSize: "2rem",
            }}
          />
          {/* {props.title.toLowerCase()} */}
        </Box>
      </Button>
    </Box>
  );
};

export default StarButton;
