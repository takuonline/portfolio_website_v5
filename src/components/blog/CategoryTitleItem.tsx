import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const CategoryTitleItem = (props: { title: string; isSelected: boolean;onSelect:(title:string)=> void }) => {
  const theme = useTheme();



  return (
    <Button
      variant="text"
      onClick={()=> {   props.onSelect(props.title)     }}
      sx={{
        borderRadius: "0",
        p: 0,
        m: 0,
        textTransform: "none",
        textAlign: "left",
        span: {
          display: "none",
        },
        ":hover,:active": {
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          borderBottom: `1px solid ${  props.isSelected ?theme.palette.secondary.main: theme.palette.text.primary   }`,
          color: props.isSelected ?"secondary.main" : "text.primary"   ,
          p: 0,
          m: 0,

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
