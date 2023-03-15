import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { SxProps, Theme, useTheme } from "@mui/material/styles";
import { NavbarTitles, voidFunc } from "./CustomNavbar";
import NavbarItem from "./NavbarItem";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

const NavbarMenu = (props: {
  sx?: SxProps<Theme>;
  showNavbarMenu: voidFunc;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const navbarItemVariant = "h3";
  const isBlogPath = pathname.includes("/blog");

  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        p: 0,
        m: 0,
        ...props.sx,
      }}
    >
      <Grid container>
        <Grid
          item
          lg={3}
          xs={12}
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            rowGap: { lg: 2, xs: 1 },
            p: 0,
            m: 0,
            my: 20,
          }}
        >
          <Typography
            variant={"body2"}
            sx={{
              fontColor: "secondary.main",
              p: 0,
              m: 0,
              mb: 2,
            }}
          >
            {"navigate"}
          </Typography>

          <NavbarItem
            showNavbarMenu={props.showNavbarMenu}
            title={NavbarTitles.home}
            variant={navbarItemVariant}
            pageRoute={"/"}
          />


          <NavbarItem
            showNavbarMenu={props.showNavbarMenu}
            title={NavbarTitles.experience}
            variant={navbarItemVariant}
          />
          <NavbarItem
            showNavbarMenu={props.showNavbarMenu}
            title={NavbarTitles.myWork}
            variant={navbarItemVariant}
          />

          <NavbarItem
            showNavbarMenu={props.showNavbarMenu}
            title={NavbarTitles.contact}
            variant={navbarItemVariant}
            pageRoute={"/#contact"}
          />

          <NavbarItem
            showNavbarMenu={props.showNavbarMenu}
            title={NavbarTitles.blog}
            variant={navbarItemVariant}
            pageRoute={"/blog"}
          />
        </Grid>
        <Grid
          item
          lg={9}
          xs={0}
          sx={{
            height: "100vh",
          }}
        ></Grid>
      </Grid>
    </Paper>
  );
};

export default NavbarMenu;
