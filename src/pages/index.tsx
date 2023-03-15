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

export default function Home() {
  const [isNavbarMenuOpen, _] = useNavBar();

  return (
    <>
      <Head>
        <title>Taku</title>
        <meta name="description" content="Taku" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CustomNavbar />

        {!isNavbarMenuOpen && (
          <>
            <HeroArea />
            <MyServices/>
            <WorkExperience />
            <CustomDivider />
            <PortfolioProjects />

            <ContactMe />
            <CustomDivider />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
