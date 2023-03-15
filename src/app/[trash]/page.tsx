// /** @jsxImportSource @emotion/react */
// "use client";

// import React from "react";
// import useNavBar from "../common/custom-hooks/useNavbar";

// import CustomNavbar from "../components/NavBar/CustomNavbar";
// import HeroArea from "../components/HeroArea/HeroArea";
// import CustomDivider from "../components/Common/CustomDivider";
// import PortfolioProjects from "../components/ProjectsSection/PortfolioProjects";
// import ContactMe from "../components/ContactMe/ContactMe";
// import WorkExperience from "../components/WorkExperience/WorkExperience";
// import Footer from "../components/Footer/Footer";
// import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "@mui/material/styles";
// import { AppProps } from "next/app";
// import theme from "../common/themes/theme";
// // import RootStyleRegistry from "./emotion";

// // interface MyAppProps extends AppProps {
// //   emotionCache?: EmotionCache;
// // }
// export default function Page() {
//   const [isNavbarMenuOpen, _] = useNavBar();

//   return (
//     <>
//       {/* <CssBaseline key="css-baseline" /> */}

//       {/* <ThemeProvider theme={theme}> */}
//       <main>
//         <CustomNavbar />

//         {!isNavbarMenuOpen && (
//           <>
//             <HeroArea />

//             <WorkExperience />
//             <CustomDivider />
//             <PortfolioProjects />

//             <ContactMe />
//             <CustomDivider />
//             <Footer />
//           </>
//         )}
//       </main>
//       {/* </ThemeProvider> */}

//     </>
//   );
// }
