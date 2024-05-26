"use client";

import HeroArea from "@/components/HeroArea/HeroArea";
import PortfolioProjects from "@/components/ProjectsSection/PortfolioProjects";
import ContactMe from "@/components/ContactMe/ContactMe";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Footer from "@/components/Footer/Footer";
import MyServices from "@/components/MyServices/MyServices";
import QuoteSection from "@/components/QuoteSection/QuoteSection";
import Navbar from "@/components/NavBar/Navbar";
import useNavBar from "@/common/custom-hooks/useNavbar";

export default function Home(props: {}) {
  const [isNavbarMenuOpen, showNavbarMenu] = useNavBar();

  return (
    <main
      style={{
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {!isNavbarMenuOpen && (
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
  );
}
