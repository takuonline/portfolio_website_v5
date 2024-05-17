import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const CategoryTitleItem = (props: {
  title: string;
  isSelected: boolean;
  onSelect: (title: string) => void;
}) => {
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      onClick={() => {
        props.onSelect(props.title);
      }}
      sx={{
        borderRadius: "100rem",
        py: 1,
        px: 3,
        m: 0,
        textTransform: "none",
        textAlign: "left",
        borderColor: props.isSelected ? "primary.main" : "background.default",
        backgroundColor: props.isSelected
          ? "background.default"
          : "transparent",
        span: {
          display: "none",
        },
        ":hover,:active": {
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      <Box
        sx={{
          width: 10,
          height: 10,
          backgroundColor: "primary.main",
          mx: 1,
          borderRadius: "50%",
          opacity: props.isSelected ? 1 : 0,
          display: props.isSelected ? "flex" : "none",
          [theme.breakpoints.down("md")]: {
            borderRadius: "4rem",
            display: props.isSelected ? "auto" : "none",
          },
        }}
      />
      <Typography
        variant="subtitle2"
        sx={{
          color: props.isSelected ? "secondary.main" : "text.primary",
          p: 0,
          m: 0,
          opacity: props.isSelected ? 1 : 0.8,
          ":active": {
            transition: "all .3s  ease",
            borderColor: "secondary.main",
            color: "secondary.main",
          },
        }}
      >
        {props.title}
      </Typography>
    </Button>
  );
};

export default CategoryTitleItem;
