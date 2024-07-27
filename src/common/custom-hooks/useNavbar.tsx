import React from "react";
import { voidFunc } from "../../components/NavBar/Navbar";

const useNavBar: () => [boolean, voidFunc] = () => {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] =
    React.useState<boolean>(false);

  const showNavbarMenu: voidFunc = () => {
    setIsNavbarMenuOpen((v) => !v);
  };

  return [isNavbarMenuOpen, showNavbarMenu];
};

export default useNavBar;
