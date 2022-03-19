import type { AppProps } from "next/app";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme";

import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
