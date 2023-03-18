import Button from "@mui/material/Button";
import { Theme, SxProps, Box, alpha, Typography } from "@mui/material";

type PrimaryBtnType = {
  onClick: () => void;
  sx?: SxProps<Theme>;
  type?: "button" | "reset" | "submit" | undefined;
  title: string;
  icon1?: React.ReactNode;
  showIndicator?: boolean;
  indicatorColor?:string
};

const PrimaryBtn = (props: PrimaryBtnType) => {
  const showIndicator = props.showIndicator ?? false;

  return (
    <Button
      variant="outlined"
      type={props.type}
      onClick={props.onClick}
      sx={{
        borderRadius: "20rem",
        px: 5,
        textTransform: "unset !important",
        borderColor: (t) => alpha(t.palette.secondary.main, 0.3),
        ...props.sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {props.icon1}

        <Typography variant="body1" sx={{

        }}>{props.title.toLowerCase()}</Typography>

        {showIndicator && (
          <Box
            sx={{
              backgroundColor:props.indicatorColor?? "primary.main",
              borderRadius: "100rem",
              width: 7,
              height: 7,
              ml: 1,

            }}
          />
        )}
      </Box>
    </Button>
  );
};

export default PrimaryBtn;
