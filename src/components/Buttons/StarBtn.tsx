import { Box, Button, useTheme, Theme, SxProps, alpha } from "@mui/material";
import Image from "next/image";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
        color={props.color}
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

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
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
          // borderColor: (t) => alpha(t.palette.secondary.main, 0.3),
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