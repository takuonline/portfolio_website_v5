import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../common/themes/theme";
import createEmotionCache from "../common/themes/createEmotionCache";
import NoiseAnimation from "../common/animations/NoiseAnimation";
import Container from "@mui/material/Container";
import CustomNavbar from "@/components/NavBar/CustomNavbar";
import useNavBar from "@/common/custom-hooks/useNavbar";
import Box from "@mui/material/Box";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [isNavbarMenuOpen, showNavbarMenu] = useNavBar();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>


        <NoiseAnimation />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />



        <Container disableGutters maxWidth={false} sx={{ maxWidth: "100rem" }}>

          <CustomNavbar
            isNavbarMenuOpen={isNavbarMenuOpen}
            showNavbarMenu={showNavbarMenu}
          />
          <Box></Box>

          <Component {...pageProps  }  isNavbarMenuOpen={isNavbarMenuOpen} />


        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}
