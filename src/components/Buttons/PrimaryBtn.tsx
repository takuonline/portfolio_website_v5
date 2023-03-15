import Button from "@mui/material/Button";
import { Theme, SxProps, Box, alpha } from "@mui/material";

const PrimaryBtn = (props: {
  onClick: () => void;
  sx?: SxProps<Theme>;
  type?: "button" | "reset" | "submit" | undefined;
  title: string;
}) => {
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
     // ":hover": {
        //   backgroundColor: "secondary.main",
        //   transition: "all .3s  ease",
        //   borderColor: "secondary.main",
        // },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {props.title.toLowerCase()}

        <Box
          sx={{
            backgroundColor: "primary.main",

            borderRadius: "100rem",
            width: 7,
            height: 7,
            ml: 1,
          }}
        />
      </Box>
    </Button>
  );
};

export default PrimaryBtn;
