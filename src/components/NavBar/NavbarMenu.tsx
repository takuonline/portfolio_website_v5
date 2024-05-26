import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";
import { NavbarTitles, voidFunc } from "./Navbar";

import { MenuNavItem } from "./NavbarItem";
import { merriWeatherFont } from "@/common/themes/fonts/font";
import NoiseAnimation from "@/common/animations/NoiseAnimation";
import { Box } from "@mui/material";

type NavbarMenuItemsType = {
  title: string;

  sx?: SxProps<Theme>;
  onClick?: voidFunc;
  showNavbarMenu?: voidFunc;
  pageRoute?: string;
  isLast?: boolean;
  idx?: number;
};

const NavbarMenu = (props: {
  sx?: SxProps<Theme>;
  showNavbarMenu: voidFunc;
  isNavbarMenuOpen: boolean;
}) => {
  const navbarMenuItems: NavbarMenuItemsType[] = [
    {
      showNavbarMenu: props.showNavbarMenu,
      title: NavbarTitles.home,
      pageRoute: "/",
    },
    {
      showNavbarMenu: props.showNavbarMenu,
      title: NavbarTitles.experience,
    },
    {
      showNavbarMenu: props.showNavbarMenu,
      title: NavbarTitles.myWork,
    },

    {
      showNavbarMenu: props.showNavbarMenu,

      title: NavbarTitles.contact,
      pageRoute: "/#contact",
    },

    {
      showNavbarMenu: props.showNavbarMenu,
      title: NavbarTitles.blog,
      pageRoute: "/blog",
      isLast: true,
    },
  ];

  return (
    <>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          py: 15,
          m: 0,
          position: "fixed",
          backgroundColor: "background.default",
          px: 3,
          overflowY: "scroll",
          zIndex: 99,
          ...props.sx,
        }}
      >
        <Box
          sx={{
            zIndex: 100,
            position: "absolute",
            width: "100%",

            top: 0,
            left: 0,
          }}
        />
        <NoiseAnimation />

        <Grid container>
          <Grid
            item
            lg={3}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              rowGap: { lg: 2, xs: 1 },
              p: 0,
              m: 0,
            }}
          >
            <Typography
              sx={{
                typography: "h1",
                color: "primary.main",
                // fontStyle: "italic",
                fontWeight: 500,
                fontFamily: merriWeatherFont.style.fontFamily,
                p: 0,
                m: 0,
                mb: 5,
                zIndex: 2,
              }}
            >
              {"Menu"}
            </Typography>

            {navbarMenuItems.map((v, idx) => (
              <MenuNavItem
                showNavbarMenu={v.showNavbarMenu}
                title={v.title}
                pageRoute={v.pageRoute}
                idx={idx}
                key={v.title}
                isLast={idx == navbarMenuItems.length - 1}
              />
            ))}
          </Grid>
          <Grid item lg={9} xs={0} sx={{}}></Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default NavbarMenu;
