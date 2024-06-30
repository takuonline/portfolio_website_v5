import "./global.css";
import { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import NoiseAnimation from "../common/animations/NoiseAnimation";
import CssBaseline from "@mui/material/CssBaseline";
import { poppinsFont } from "../common/themes/fonts/font";
import { StyledRoot } from "@/app/StyledRoot";

import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "Takuonline",
  description:
    "xplore Takudzwa Makusha's portfolio, featuring cutting-edge solutions in machine learning, frontend, backend, and mobile development. Dive into a showcase of innovative business solutions designed to connect the dots of technology and strategy, built on a foundation of expert knowledge and creative execution.",
  // themeColor: theme.palette.primary.main,
  creator: "Takudzwa Makusha",
  robots: "index, follow",
  authors: [
    {
      name: "Takudzwa Makusha",
    },
  ],
  category: "Technology",
  openGraph: {
    type: "profile",
    url: "https://takuonline.com",
    title: "Takudzwa Makusha portfolio",
    description:
      "Explore Takudzwa Makusha's portfolio, featuring cutting-edge solutions in machine learning, frontend, backend, and mobile development. Dive into a showcase of innovative business solutions designed to connect the dots of technology and strategy, built on a foundation of expert knowledge and creative execution.",

    siteName: "TakuOnline",
    // images: [{
    //   url: "https://example.com/og.png",
    // }],
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head className={poppinsFont.className}></head>
      <body>
        <AppRouterCacheProvider>
          <StyledRoot>
            <CssBaseline />

            <NoiseAnimation />

            <Container
              disableGutters
              maxWidth={false}
              sx={{ maxWidth: "100rem" }}
            >
              {props.children}
            </Container>
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
