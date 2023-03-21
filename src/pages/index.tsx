import Head from "next/head";

import CustomNavbar from "../components/NavBar/CustomNavbar";
import React from "react";
import HeroArea from "../components/HeroArea/HeroArea";
import CustomDivider from "../components/Common/CustomDivider";
import PortfolioProjects from "../components/ProjectsSection/PortfolioProjects";
import ContactMe from "../components/ContactMe/ContactMe";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import useNavBar from "../common/custom-hooks/useNavbar";
import Footer from "../components/Footer/Footer";
import MyServices from "@/components/MyServices/MyServices";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import NavbarMenu from "@/components/NavBar/NavbarMenu";
import Container from "@mui/material/Container";

export default function Home(props: { isNavbarMenuOpen: boolean }) {
  // const [isNavbarMenuOpen, showNavbarMenu] = useNavBar();

  return (
    <>
      <Head>
        <title>Taku</title>
        <meta name="description" content="Taku" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main
        style={{
          overflowX: "hidden",
        }}
      >
        {/* <CustomNavbar
            isNavbarMenuOpen={isNavbarMenuOpen}
            showNavbarMenu={showNavbarMenu}
          /> */}

        {!props.isNavbarMenuOpen && (
          <>
            <HeroArea />
            <MyServices />
            <WorkExperience />

            <PortfolioProjects />
            <QuoteSection />

            <ContactMe />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
