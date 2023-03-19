import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import { alpha, SxProps, Theme, useTheme } from "@mui/material/styles";
import { voidFunc } from "./CustomNavbar";
import Typography from "@mui/material/Typography";
import replaceAll from "../../common/utils/custom-replace-all";
import { CustomListItem } from "../Common/CustomListItem";
import Box from "@mui/material/Box";

type variantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"
  | "inherit"
  | undefined;

const NavbarItem = (props: {
  title: string;
  variant?: variantType;
  sx?: SxProps<Theme>;
  onClick?: voidFunc;
  showNavbarMenu?: voidFunc;
  pageRoute?: string;
}) => {
  const theme = useTheme();
  const router = useRouter();

  const handleClick = () => {
    props.showNavbarMenu?.();

    if (props.onClick) {
      props.onClick?.();
    } else {
      const route =
        props.pageRoute ??
        "/#" + replaceAll(props.title.trim().toLowerCase(), " ", "-");
      router.push(route);
    }
  };

  const transition = `all ${theme.transitions.duration.standard} ease`;

  return (
    <Button
      onClick={handleClick}
      variant="text"
      sx={{
        borderRadius: 0,
        p: 0,
        m: 0,
        minWidth: 10,
        color: "text.primary",
        textTransform: "none",
        borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.3)}`,
        textAlign: "left",
        span: {
          display: "none",
        },
        transition: transition,
        ":hover": {
          color: "primary.main",
          backgroundColor: "transparent",
          borderColor: "transparent",
          transition: transition,
        },
      }}
    >
      <Typography variant={props.variant ?? "body2"} m={0} p={0}>
        {props.title}
      </Typography>
    </Button>
  );
};

const MenuNavItem = (props: {
  title: string;
  // sx?: SxProps<Theme>;
  onClick?: voidFunc;
  showNavbarMenu?: voidFunc;
  pageRoute?: string;
  isLast?: boolean;
  idx: number;
}) => {
  const theme = useTheme();
  const router = useRouter();

  const handleClick = () => {
    props.showNavbarMenu?.();

    if (props.onClick) {
      props.onClick?.();
    } else {
      const route =
        props.pageRoute ??
        "/#" + replaceAll(props.title.trim().toLowerCase(), " ", "-");
      router.push(route);
    }
  };

  const transition = `all ${theme.transitions.duration.standard} ease`;

  return (
    <Box
      sx={{
        zIndex: 2,
        width: "100%",
        mb: 1,

      }}
    >
      <CustomListItem
        title={props.title}
        onClick={handleClick}
        idx={props.idx}
        isLast={props.isLast ?? false}
      />
    </Box>
  );
};

export { NavbarItem, MenuNavItem };
