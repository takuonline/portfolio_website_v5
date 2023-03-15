import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const ContactItem = (props: { title: string; href: string }) => {
  const theme = useTheme();
  const transition = `all ${theme.transitions.duration.standard} ease`;

  return (
    <Button
      variant="text"
      href={props.href}
      LinkComponent={Link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        borderRadius: "0",
        p: 0,
        m: 0,
        textTransform: "none",
        transition: transition,
        textAlign: "left",
        span: {
          display: "none",
        },
        borderBottom: `1px solid ${theme.palette.text.primary}`,

        ":hover": {
          transition: transition,
          backgroundColor: theme.palette.background.default,
          color: "secondary.main",
          borderColor: theme.palette.secondary.main,
        },
      }}
    >
      <Typography variant="h5">{props.title}</Typography>
    </Button>
  );
};
export default ContactItem;
