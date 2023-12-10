import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import BodyWrapper from "../Common/BodyWrapper";
import NavbarMenu from "./NavbarMenu";

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import replaceAll from "@/common/utils/custom-replace-all";
import { NavbarItem } from "./NavbarItem";
import SVGComponents from "@/common/svgComponents/SVGComponents";

const NavbarTitles = {
  home: "home",
  experience: "experience",
  contact: "contact",
  myWork: "my work",
  blog: "blog",
};

export { NavbarTitles };

export type voidFunc = () => void;

export default function CustomNavbar(props: {
  showNavbarMenu: voidFunc;
  isNavbarMenuOpen: boolean;
}) {
  // const [isNavbarMenuOpen, showNavbarMenu] = useNavBar();

  const { showNavbarMenu, isNavbarMenuOpen } = props;

  const theme = useTheme();

  // TODO: This is a hack to fix an issue with the use MediaQuery hook
  const initValue = useMediaQuery(theme.breakpoints.up("md"), {
    // noSsr: true,
  });
  const [isMdUpBreakpoint, setIsMdUpBreakpoint] = useState(true);

  React.useEffect(() => {
    setIsMdUpBreakpoint(initValue);
  }, [useMediaQuery(theme.breakpoints.up("md")), initValue]);

  const router = useRouter();
  const pathName = usePathname();

  const isHomePath = pathName == "/";

  const handleBlogClick = (routePath: string) => {
    const route = "/" + replaceAll(routePath.trim().toLowerCase(), " ", "-");
    router.push(route);
  };

  return (
    <nav>
      <BodyWrapper
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 2,
            zIndex: 100,
            position: "absolute",
          }}
        >
          <Button
            variant="text"
            onClick={() => {
              isNavbarMenuOpen && props.showNavbarMenu?.(); // close nav menu if open
              router.push("/");
            }}
            disableElevation
            disableRipple
            sx={{
              borderRadius: 2,
              m: 0,
              textTransform: "none",
              color: "text.primary",
              textAlign: "left",
              ":hover": {
                color: theme.palette.primary.main,
                backgroundColor: "transparent",
              },
              span: {
                display: "none",
              },
            }}
          >
            {/* <Typography variant="h4">{"Taku"}</Typography> */}

            <SVGComponents.Logo
              sx={{
                fill: theme.palette.common.white,
                width: 80,
                ":hover": {
                  fill: theme.palette.primary.main,
                },
              }}
            />

            {/* <SVGComponents.LogoV2
             color={theme.palette.common.white}
             size={150 }
            /> */}
          </Button>

          <Box
            sx={{
              display: "flex",
              // mx: "auto",
              flex: "7 1 auto",
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
                    // mx: "auto",
                    flex: "6 1 auto",
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
          )}
        </Box>
      </BodyWrapper>
      <NavbarMenu
        showNavbarMenu={showNavbarMenu}
        isNavbarMenuOpen={isNavbarMenuOpen}
        sx={{
          transition: "visibility 0s, opacity 0.3s linear",
          opacity: isNavbarMenuOpen ? "1" : "0",
          visibility: isNavbarMenuOpen ? "visible" : "hidden",
          height: isNavbarMenuOpen ? "100%" : "0rem",
        }}
      />
    </nav>
  );
}
