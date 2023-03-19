import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import BodyWrapper from "../Common/BodyWrapper";
import NavbarMenu from "./NavbarMenu";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import useNavBar from "../../common/custom-hooks/useNavbar";
import { usePathname } from "next/navigation";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import replaceAll from "@/common/utils/custom-replace-all";
import { NavbarItem } from "./NavbarItem";

const NavbarTitles = {
  home: "home",
  experience: "experience",
  contact: "contact",
  myWork: "my work",
  blog: "blog",
};

export { NavbarTitles };

export type voidFunc = () => void;

export default function CustomNavbar() {
  const [isNavbarMenuOpen, showNavbarMenu] = useNavBar();
  const router = useRouter();
  const pathname = usePathname();

  const theme = useTheme();
  const isMdUpBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
  const isHomePath = pathname == "/";
  // const blog: voidFunc = () => {
  // setIsNavbarMenuOpen((v) => !v);
  // };

  const handleBlogClick = (routePath: string) => {
    const route = "/" + replaceAll(routePath.trim().toLowerCase(), " ", "-");
    router.push(route);
  };
  return (
    <BodyWrapper>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          pt: 2,
          position: "relative",
        }}
      >
        <Button
          variant="text"
          onClick={() => router.push("/")}
          disableElevation
          disableRipple
          sx={{
            borderRadius: 2,
            // px: 1.5,
            // py:0.5,
            m: 0,
            textTransform: "none",
            color: "text.primary",
            ":hover": {
              color: theme.palette.primary.main,
              backgroundColor: "transparent"
            },
            textAlign: "left",
            span: {
              display: "none",
            },
          }}
        >
          <Typography variant="h4">{"Taku"}</Typography>
        </Button>

        <Box
          sx={{
            display: "flex",
            mx: "auto",
            flex: "4 1 auto",
          }}
        />

        {isHomePath && (
          <>
            {!isNavbarMenuOpen && isMdUpBreakpoint && (
              <Box
                sx={{
                  display: "flex",
                  columnGap: { md: "3rem", xs: "2.9rem" },
                  justifyContent: "space-between",
                }}
              >
                <NavbarItem title={NavbarTitles.experience} />
                <NavbarItem title={NavbarTitles.myWork} />
                <NavbarItem title={NavbarTitles.contact} />
              </Box>
            )}

            {isMdUpBreakpoint && (
              <Box
                sx={{
                  display: "flex",
                  flex: "4 1 auto",
                  mx: "auto",
                }}
              />
            )}
          </>
        )}
        {!isMdUpBreakpoint ? (
          <PrimaryBtn
            onClick={showNavbarMenu}
            title={isNavbarMenuOpen ? "close" : "menu"}
            showIndicator={true}
          />
        ) : (
          <PrimaryBtn
            onClick={() => handleBlogClick(NavbarTitles.blog)}
            title={NavbarTitles.blog}
            showIndicator={true}
          />

          // <NavbarItem title={NavbarTitles.blog} pageRoute={"/blog"} />
        )}
      </Box>

      <NavbarMenu
        showNavbarMenu={showNavbarMenu}
        sx={{
          transition: "visibility 0s, opacity 0.3s linear",
          opacity: isNavbarMenuOpen ? "1" : "0",
          visibility: isNavbarMenuOpen ? "visible" : "hidden",
          height: isNavbarMenuOpen ? "100%" : "0rem",

          backgroundColor: "background.default",
          // position:"fixed",
          px: 7,

          zIndex: 99_999,
        }}
      />
    </BodyWrapper>
  );
}
