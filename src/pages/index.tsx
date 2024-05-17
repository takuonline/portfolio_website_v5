import Head from "next/head";

import HeroArea from "../components/HeroArea/HeroArea";
import PortfolioProjects from "../components/ProjectsSection/PortfolioProjects";
import ContactMe from "../components/ContactMe/ContactMe";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Footer from "../components/Footer/Footer";
import MyServices from "@/components/MyServices/MyServices";
import QuoteSection from "@/components/QuoteSection/QuoteSection";

export default function Home(props: { isNavbarMenuOpen: boolean }) {
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
